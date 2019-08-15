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

                    // Clone the event start and end dates so we can
                    // modify them per recurring event if needed
                    let eventStart = start.clone();
                    let eventEnd = end.clone();

                    // If we generated events before from this recurring event...
                    if ( recurringEvent.generatedEvents.start && recurringEvent.generatedEvents.end )
                    {
                        // Return, if the given start and end dates are in between the generated events' start and end dates
                        if ( moment(recurringEvent.generatedEvents.start).isSameOrBefore(eventStart) && moment(recurringEvent.generatedEvents.end).isSameOrAfter(eventEnd) )
                        {
                            return;
                        }

                        // Push the start and end dates forward, if start date is after the generated events' start date
                        // and the end date is after the generated events' end date
                        if ( moment(recurringEvent.generatedEvents.start).isBefore(eventStart) && moment(recurringEvent.generatedEvents.end).isBefore(eventEnd) )
                        {
                            // Get the duration in between the event start and end dates
                            const eventDuration = moment.duration(eventEnd.diff(eventStart));

                            // Push the event start to the generated events' end date
                            eventStart = moment(recurringEvent.generatedEvents.end);

                            // Push the event end using the new event start and duration
                            eventEnd = eventStart.clone().add(eventDuration);
                        }

                        // Pull the start and end dates backward, if start date is before the generated events' start date
                        // and the end date is before the generated events' end date
                        if ( moment(recurringEvent.generatedEvents.start).isAfter(eventStart) && moment(recurringEvent.generatedEvents.end).isAfter(eventEnd) )
                        {
                            // Get the duration in between the event start and end dates
                            const eventDuration = moment.duration(eventEnd.diff(eventStart));

                            // Pull the event end to the generated events' start date
                            eventEnd = moment(recurringEvent.generatedEvents.start);

                            // Pull the event start using the new event end and duration
                            eventStart = eventEnd.clone().subtract(eventDuration);
                        }
                    }

                    // Get the original recurring event and update the generatedEvents object if needed
                    const originalRecurringEvent = this._recurringEvents.find((originalEvent) => originalEvent.id === recurringEvent.id);

                    if ( !originalRecurringEvent.generatedEvents.start || moment(originalRecurringEvent.generatedEvents.start).isAfter(moment(eventStart)) )
                    {
                        originalRecurringEvent.generatedEvents.start = eventStart.clone().toISOString();
                    }

                    if ( !originalRecurringEvent.generatedEvents.end || moment(originalRecurringEvent.generatedEvents.end).isBefore(moment(eventEnd)) )
                    {
                        originalRecurringEvent.generatedEvents.end = eventEnd.clone().toISOString();
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
                        dtstart: eventStart.clone().toDate(),
                        until  : eventEnd.clone().toDate()
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

                        // Also push the new event to the original events array
                        this._events.push(newEvent);
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
