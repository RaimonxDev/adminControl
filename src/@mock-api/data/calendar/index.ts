import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';
import { RRule } from 'rrule';
import { AsmMockApiService } from '@mock-api/mock-api.service';
import { AsmMockApiUtils } from '@mock-api/mock-api.utils';
import { calendars as calendarsData, events as eventsData, recurringEvents as recurringEventsData, settings as settingsData, weekdays as weekdaysData } from '@mock-api/data/calendar/data';

@Injectable({
    providedIn: 'root'
})
export class MockCalendarApi
{
    // Private
    private _calendars: any[];
    private _events: any[];
    private _recurringEvents: any[];
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
        this._recurringEvents = recurringEventsData;
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
                const recurringEvents = _.cloneDeep(this._recurringEvents);

                // Prepare the results
                const results = [];

                // Go through the events
                events.forEach((event) => {

                    // Only grab the event if it's within the range
                    if ( moment(event.start).isSameOrAfter(start) && moment(event.end).isSameOrBefore(end) )
                    {
                        // Push the event into the results array
                        results.push(event);
                    }
                });

                // Go through the recurring events...
                recurringEvents.forEach((recurringEvent) => {

                    // Return if the end date is same or before the event's start date. Since we use event's
                    // start date as the DTSTART, we don't need the given start date here to generate instances.
                    // But we need the end date to limit the RRule generation so we must make sure that the
                    // given end date is after the event's start date.
                    if ( end.isSameOrBefore(moment(recurringEvent.start)) )
                    {
                        return;
                    }

                    // Prepare the new event
                    const event = {

                        // Set a recurringEventId on the event so we don't lose the event's origin rule
                        recurringEventId: recurringEvent.id,

                        // Get the rest of the data
                        id         : null,
                        calendarId : recurringEvent.calendarId,
                        title      : recurringEvent.title,
                        description: recurringEvent.description,
                        start      : null,
                        end        : null,
                        allDay     : recurringEvent.allDay,
                        recurrence : recurringEvent.recurrence
                    };

                    // Parse the recurring event's rules
                    const parsedRules = {};
                    recurringEvent.recurrence.split(';').forEach((rule) => {
                        parsedRules[rule.split('=')[0]] = rule.split('=')[1];
                    });

                    // Get the rrule string from the recurring event
                    let rruleString = recurringEvent.recurrence;

                    // Add DTSTART to it
                    rruleString = rruleString + ';DTSTART=' + moment(recurringEvent.start).format('YYYYMMDD[T]HHmmss[Z]');

                    // If rrule doesn't have UNTIL or COUNT, add the end date as UNTIL
                    if ( !parsedRules['UNTIL'] && !parsedRules['COUNT'] )
                    {
                        rruleString = rruleString + ';UNTIL=' + end.clone().format('YYYYMMDD[T]HHmmss[Z]');
                    }

                    // Generate recurring dates and loop through them
                    RRule.fromString(rruleString).all().forEach((date) => {

                        // Prepare the event id
                        const instanceId = recurringEvent.id + '_' + moment(date).format('YYYYMMDD[T]HHmmss[Z]');

                        // Return, if we already generated an instance for this particular
                        // date by looking up the events with the instance id
                        if ( events.find((item) => item.id === instanceId) )
                        {
                            return;
                        }

                        // Clone the event
                        const newEvent = _.cloneDeep(event);

                        // Attach the id
                        newEvent.id = instanceId;

                        // Set the start date of the new event
                        newEvent.start = date.toISOString();

                        // Set the end date of the new event using the duration data
                        newEvent.end = moment(date).add(moment.duration(moment(recurringEvent.end).diff(moment(recurringEvent.start)))).toISOString();

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

                // If the startWeekOn setting is set to Sunday...
                if ( this._settings.startWeekOn === 0 )
                {
                    // Move the Sunday to the beginning
                    weekdays.unshift(weekdays.pop());
                }

                // If the startWeekOn is set to Saturday...
                if ( this._settings.startWeekOn === 6 )
                {
                    // Move the Sunday to the beginning
                    weekdays.unshift(weekdays.pop());

                    // Then move the Saturday to the beginning
                    weekdays.unshift(weekdays.pop());
                }

                return [
                    200,
                    weekdays
                ];
            });
    }
}
