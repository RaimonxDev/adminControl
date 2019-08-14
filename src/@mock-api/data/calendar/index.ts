import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';
import { RRule } from 'rrule';
import { AsmMockApiUtils } from '@mock-api/mock-api.utils';
import { AsmMockApiService } from '@mock-api/mock-api.service';
import { calendars as calendarsData, events as eventsData, recurringEvents as recurringEventsData } from '@mock-api/data/calendar/data';

@Injectable({
    providedIn: 'root'
})
export class MockCalendarApi
{
    // Private
    private _calendars: any[];
    private _events: any[];
    private _recurringEvents: any[];

    /**
     * Constructor
     *
     * @param {AsmMockApiService} _asmMockApiService
     */
    constructor(
        private _asmMockApiService: AsmMockApiService
    )
    {
        // Set the data
        this._calendars = calendarsData;
        this._events = eventsData;
        this._recurringEvents = recurringEventsData;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Initialize
     */
    init(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Calendars - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/calendar/calendars')
            .reply(() => {

                // Clone the calendars
                const calendars = _.cloneDeep(this._calendars);

                return [
                    200,
                    calendars
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Events - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/calendar/events')
            .reply((request) => {

                // Get the start and end dates as moment
                const start = moment(request.params.get('start'));
                const end = moment(request.params.get('end'));

                // Clone the events and recurring events
                const events = _.cloneDeep(this._events);
                const recurringEvents = _.cloneDeep(this._recurringEvents);

                // Prepare the results
                const results = [];

                // Go through the events
                events.forEach((event) => {

                    // Only grab the event if it's within the range
                    if ( moment(event.start).isAfter(start) && moment(event.end).isBefore(end) )
                    {
                        results.push(event);
                    }
                });

                // Go through the recurring event rules
                recurringEvents.forEach((recurringEvent) => {

                    // Skip this recurring event if the events are already
                    // generated from it in between the start and end dates
                    if ( recurringEvent.start && recurringEvent.end )
                    {
                        if ( moment(recurringEvent.start).isSameOrBefore(start) && moment(recurringEvent.end).isSameOrAfter(end) )
                        {
                            return;
                        }
                    }

                    // Prepare the new event
                    const event = {

                        // Set a ruleId on the event so we don't lose the event's origin rule
                        ruleId: recurringEvent.id,

                        // Get the rest of the data
                        id         : null,
                        calendarId : recurringEvent.calendarId,
                        title      : recurringEvent.title,
                        description: recurringEvent.description,
                        start      : null,
                        end        : null,
                        allDay     : recurringEvent.allDay,
                        editable   : recurringEvent.editable
                    };

                    // Set the frequency correctly
                    recurringEvent.rrule.freq = RRule[recurringEvent.rrule.freq];

                    // Set the byweekday and wkst correctly if they are available
                    if ( recurringEvent.rrule.byweekday )
                    {
                        recurringEvent.rrule.byweekday = RRule[recurringEvent.rrule.byweekday];
                    }

                    if ( recurringEvent.rrule.wkst )
                    {
                        recurringEvent.rrule.wkst = RRule[recurringEvent.rrule.wkst];
                    }

                    // Create the rule set using RRule
                    const rule = new RRule({
                        ...recurringEvent.rrule,
                        dtstart: start.toDate(),
                        until  : end.toDate()
                    });

                    // Generate recurring dates and loop through them
                    rule.all().forEach((date) => {

                        // Clone the event
                        const newEvent = _.cloneDeep(event);

                        // Since we use the recurring event's id as a ruleId, generate a new unique id for the event
                        newEvent.id = AsmMockApiUtils.guid();

                        // Set the start date of the new event
                        newEvent.start = date.toISOString();

                        // Set the end date of the new event using the duration data
                        newEvent.end = moment(date).add(moment.duration(recurringEvent.duration)).toISOString();

                        // Push the new event to the results array
                        results.push(newEvent);

                        // Also push the new event to the existing events array
                        this._events.push(newEvent);

                        // Update the recurring event's generatedEvents object if needed
                        if ( !recurringEvent.generatedEvents.start || moment(recurringEvent.generatedEvents.start).isAfter(moment(newEvent.start)) )
                        {
                            recurringEvent.generatedEvents.start = newEvent.start;
                        }

                        if ( !recurringEvent.generatedEvents.end || moment(recurringEvent.generatedEvents.end).isBefore(moment(newEvent.end)) )
                        {
                            recurringEvent.generatedEvents.end = newEvent.end;
                        }
                    });
                });

                return [
                    200,
                    results
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Event - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onPatch('api/apps/calendar/event')
            .reply((request) => {

                // Get the id and event
                const id = request.body.id;
                const event = _.cloneDeep(request.body.event);

                // Prepare the updated event
                let updatedEvent = null;

                // Find the event and update it
                this._events.forEach((item, index, events) => {

                    if ( item.id === id )
                    {
                        // Update the event
                        events[index] = _.assign({}, events[index], event);

                        // Store the updated event
                        updatedEvent = events[index];
                    }
                });

                return [
                    200,
                    updatedEvent
                ];
            });
    }
}
