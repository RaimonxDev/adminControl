import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';
import { RRule } from 'rrule';
import { AsmMockApiUtils } from '@mock-api/mock-api.utils';
import { AsmMockApiService } from '@mock-api/mock-api.service';
import { calendars as calendarsData, events as eventsData, recurrenceRules as recurenceRulesData, settings as settingsData, weekdays as weekdaysData } from '@mock-api/data/calendar/data';

@Injectable({
    providedIn: 'root'
})
export class MockCalendarApi
{
    // Private
    private _calendars: any[];
    private _events: any[];
    private _recurrenceRules: any[];
    private _settings: any;
    private _weekdays: any;

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
        this._recurrenceRules = recurenceRulesData;
        this._settings = settingsData;
        this._weekdays = weekdaysData;
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
        // @ Calendars - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onPatch('api/apps/calendar/calendars')
            .reply((request) => {

                // Get the id and calendar
                const id = request.body.id;
                const calendar = _.cloneDeep(request.body.calendar);

                // Prepare the updated calendar
                let updatedCalendar = null;

                // Find the calendar and update it
                this._calendars.forEach((item, index, calendars) => {

                    if ( item.id === id )
                    {
                        // Update the calendar
                        calendars[index] = _.assign({}, calendars[index], calendar);

                        // Store the updated calendar
                        updatedCalendar = calendars[index];
                    }
                });

                return [
                    200,
                    updatedCalendar
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

                // Clone the events and recurrence rules
                const events = _.cloneDeep(this._events);
                const recurrenceRules = _.cloneDeep(this._recurrenceRules);

                // Prepare the results
                const results = [];

                // Go through the events
                events.forEach((event) => {

                    // Only grab the event if it's within the range
                    if ( moment(event.start).isAfter(start) && moment(event.end).isBefore(end) )
                    {
                        // If the event is generated from a rule, include that rule's 'rrule' object as recurrenceRule
                        if ( event.ruleId )
                        {
                            event.recurrenceRules = this._recurrenceRules.find((recurringEvent) => recurringEvent.id === event.ruleId).rrule;
                        }

                        // Push the event into the results array
                        results.push(event);
                    }
                });

                // Go through the recurrence rules...
                recurrenceRules.forEach((recurrenceRule) => {

                    // Clone the event start and end dates so we can
                    // modify them per recurring event if needed
                    let eventStart = start.clone();
                    let eventEnd = end.clone();

                    // If we generated events from this recurring event...
                    if ( recurrenceRule.generatedEvents.start && recurrenceRule.generatedEvents.end )
                    {
                        // Return, if the given start and end dates are in between the generated events' start and end dates
                        if ( moment(recurrenceRule.generatedEvents.start).isSameOrBefore(eventStart) && moment(recurrenceRule.generatedEvents.end).isSameOrAfter(eventEnd) )
                        {
                            return;
                        }

                        // Push the start and end dates forward, if start date is after the generated events' start date
                        // and the end date is after the generated events' end date
                        if ( moment(recurrenceRule.generatedEvents.start).isBefore(eventStart) && moment(recurrenceRule.generatedEvents.end).isBefore(eventEnd) )
                        {
                            // Get the duration in between the event start and end dates
                            const eventDuration = moment.duration(eventEnd.diff(eventStart));

                            // Push the event start to the generated events' end date
                            eventStart = moment(recurrenceRule.generatedEvents.end);

                            // Push the event end using the new event start and duration
                            eventEnd = eventStart.clone().add(eventDuration);
                        }

                        // Pull the start and end dates backward, if start date is before the generated events' start date
                        // and the end date is before the generated events' end date
                        if ( moment(recurrenceRule.generatedEvents.start).isAfter(eventStart) && moment(recurrenceRule.generatedEvents.end).isAfter(eventEnd) )
                        {
                            // Get the duration in between the event start and end dates
                            const eventDuration = moment.duration(eventEnd.diff(eventStart));

                            // Pull the event end to the generated events' start date
                            eventEnd = moment(recurrenceRule.generatedEvents.start);

                            // Pull the event start using the new event end and duration
                            eventStart = eventEnd.clone().subtract(eventDuration);
                        }
                    }

                    // Get the original recurring event and update the generatedEvents object if needed
                    const originalRecurringEvent = this._recurrenceRules.find((originalEvent) => originalEvent.id === recurrenceRule.id);

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
                        ruleId: recurrenceRule.id,

                        // Get the rest of the data
                        id             : null,
                        calendarId     : recurrenceRule.calendarId,
                        title          : recurrenceRule.title,
                        description    : recurrenceRule.description,
                        start          : null,
                        end            : null,
                        allDay         : recurrenceRule.allDay,
                        classNames     : recurrenceRule.classNames,
                        editable       : recurrenceRule.editable,
                        recurrenceRules: _.cloneDeep(recurrenceRule.rrule)
                    };

                    // Set the frequency correctly
                    recurrenceRule.rrule.freq = RRule[recurrenceRule.rrule.freq];

                    // Set the byweekday and wkst correctly if they are available
                    if ( recurrenceRule.rrule.byweekday )
                    {
                        recurrenceRule.rrule.byweekday.forEach((value, index, array) => {
                            array[index] = RRule[value];
                        });
                    }

                    if ( recurrenceRule.rrule.wkst )
                    {
                        recurrenceRule.rrule.wkst = RRule[recurrenceRule.rrule.wkst];
                    }

                    // Create the rule set using RRule
                    const rule = new RRule({
                        ...recurrenceRule.rrule,
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
                        newEvent.end = moment(date).add(moment.duration(recurrenceRule.duration)).toISOString();

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

        // -----------------------------------------------------------------------------------------------------
        // @ Settings - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/calendar/settings')
            .reply(() => {

                // Clone the settings
                const settings = _.cloneDeep(this._settings);

                return [
                    200,
                    settings
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Settings - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onPatch('api/apps/calendar/settings')
            .reply((request) => {

                // Get the settings
                const settings = _.cloneDeep(request.body.settings);

                // Store the updated settings
                this._settings = settings;

                return [
                    200,
                    settings
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Weekdays - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/calendar/weekdays')
            .reply(() => {

                // Clone the weekdays
                const weekdays = _.cloneDeep(this._weekdays);

                return [
                    200,
                    weekdays
                ];
            });
    }
}
