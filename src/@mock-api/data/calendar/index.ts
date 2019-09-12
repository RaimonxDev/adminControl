import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';
import { rrulestr } from 'rrule';
import { AsmMockApiService } from '@mock-api/mock-api.service';
import { AsmMockApiUtils } from '@mock-api/mock-api.utils';
import { calendars as calendarsData, events as eventsData, exceptions as exceptionsData, settings as settingsData, weekdays as weekdaysData } from '@mock-api/data/calendar/data';

@Injectable({
    providedIn: 'root'
})
export class MockCalendarApi
{
    // Private
    private _calendars: any[];
    private _events: any[];
    private _exceptions: any[];
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
        this._exceptions = exceptionsData;
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
                const viewStart = moment(request.params.get('start')).startOf('day');
                const viewEnd = moment(request.params.get('end')).endOf('day');

                // Clone the events
                const events = _.cloneDeep(this._events);

                // Prepare the results
                const results = [];

                // Go through the events...
                events.forEach((event) => {

                    // Get the event's start and end dates as moment
                    const eventStart = moment(event.start);
                    const eventEnd = moment(event.end);

                    // If it's a normal event...
                    if ( !event.recurrence )
                    {
                        // Only grab the event if it's within the range
                        if ( eventStart.isSameOrAfter(viewStart, 'day') && eventEnd.isSameOrBefore(viewEnd, 'day') )
                        {
                            // Push the event into the results array
                            results.push(event);
                        }
                    }
                    // If it's a recurring event...
                    else
                    {
                        // Skip if the event does not recur within the view range
                        if ( eventStart.isAfter(viewEnd, 'day') || eventEnd.isBefore(viewStart, 'day') )
                        {
                            return;
                        }

                        // Set the DTSTART and UNTIL for RRule
                        const dtStart = eventStart;
                        const until = viewEnd.isBefore(eventEnd) ? viewEnd : eventEnd;

                        // Set the dtStart and until to UTC mode since we use RRule in UTC mode
                        until.utc();

                        // Parse the recurrence rules
                        const parsedRules = {};
                        event.recurrence.split(';').forEach((rule) => {

                            // Split the rule
                            const parsedRule = rule.split('=');

                            // Omit UNTIL or COUNT from the parsed rules since we only
                            // need them for calculating the event's end date. We will
                            // add an UNTIL later based on the above calculations.
                            if ( parsedRule[0] === 'UNTIL' || parsedRule[0] === 'COUNT' )
                            {
                                return;
                            }

                            // Add the rule to the parsed rules
                            parsedRules[parsedRule[0]] = parsedRule[1];
                        });

                        // Generate the rule array from the parsed rules
                        const rules = [];
                        Object.keys(parsedRules).forEach((key) => {
                            rules.push(key + '=' + parsedRules[key]);
                        });

                        // Prepare the ruleSet
                        const ruleSet = [];

                        // Add DTSTART
                        ruleSet.push('DTSTART:' + dtStart.format('YYYYMMDD[T]HHmmss[Z]'));

                        // Add RRULE
                        ruleSet.push('RRULE:' + rules.join(';') + ';UNTIL=' + until.format('YYYYMMDD[T]HHmmss[Z]'));

                        // Find and add any available exceptions to the rule
                        this._exceptions.filter((item) => {

                            // If the item is an exception to this event...
                            if ( item.eventId === event.id )
                            {
                                // Add it as an EXDATE to the rrule
                                ruleSet.push('EXDATE:' + moment(item.exdate).format('YYYYMMDD[T]HHmmss[Z]'));
                            }
                        });

                        // Create an RRuleSet from the ruleSet array
                        const rruleset = rrulestr(ruleSet.join('\n'), {forceset: true});

                        // Generate the recurring dates and loop through them
                        rruleset.all().forEach((date) => {

                            // Get the rule date as a moment
                            const ruleDate = moment(date);

                            // Subtract the UTC Offset from the rule date as we use local time for DTSTART.
                            // The reason for this is simple; if we use UTC dates for DTSTART, RRule generated
                            // dates can shift. Since we have to store the dates as UTC, we can figure out the
                            // UTC value by simply subtracting the UTC Offset (minutes) from the rule date rather
                            // than using UTC dates in the first place. This will ensure there will be no time/day
                            // shift on generated rules since they will be generated based on the local time.
                            ruleDate.subtract(ruleDate.utcOffset(), 'minutes');

                            // Skip the date if it's not in between the view start and view end
                            // to prevent generating unnecessary amount of instances and to
                            // prevent instance duplication
                            if ( !ruleDate.isBetween(viewStart, viewEnd, 'day', '[]') )
                            {
                                return;
                            }

                            // Prepare the event instance
                            const eventInstance = {

                                // Generate an instance id using the event id and rule date
                                id: event.id + '_' + ruleDate.clone().utc().format('YYYYMMDD[T]HHmmss[Z]'),

                                // Set the recurringEventId on the event so we don't lose the event's origin
                                recurringEventId: event.id,

                                // Whether this is the first instance of the recurring event or not
                                isFirstInstance: event.start === ruleDate.clone().toISOString(),

                                // Get the rest of the data
                                calendarId : event.calendarId,
                                title      : event.title,
                                description: event.description,
                                start      : ruleDate.toISOString(),
                                end        : ruleDate.add(event.duration, 'minutes').toISOString(),
                                duration   : event.duration,
                                allDay     : event.allDay,
                                recurrence : event.recurrence
                            };

                            // Push the event instance to the results array
                            results.push(eventInstance);
                        });
                    }
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
        // @ Event - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onDelete('api/apps/calendar/event')
            .reply((request) => {

                // Get the id and event
                const id = request.params.get('id');

                // Find the event and delete it
                const index = this._events.findIndex((item) => item.id === id);
                this._events.splice(index, 1);

                return [
                    200,
                    true
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Recurring Event - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onPatch('api/apps/calendar/recurring-event')
            .reply((request) => {

                // Get the event, original event and mode
                const event = _.cloneDeep(request.body.event);
                const originalEvent = _.cloneDeep(request.body.originalEvent);
                const mode = request.body.mode;

                // Single - Create a non-recurring event and add an exception to the recurring event
                if ( mode === 'single' )
                {
                    // Create a new event from the event while ignoring the range and recurringEventId
                    const {range, recurringEventId, ...newEvent} = event;

                    // Generate a unique id for the event
                    newEvent.id = AsmMockApiUtils.guid();

                    // Calculate the end date using the start date and the duration
                    newEvent.end = moment(newEvent.start).add(newEvent.duration, 'minutes');

                    // Null-ify the recurrence and duration
                    newEvent.duration = null;
                    newEvent.recurrence = null;

                    // Add a new exception for the recurring event that ignores this single event's start date
                    this._exceptions.push({
                        id     : AsmMockApiUtils.guid(),
                        eventId: originalEvent.recurringEventId,
                        exdate : moment(originalEvent.start).toISOString()
                    });

                    // Push the new event to the events array
                    this._events.push(newEvent);
                }

                // Future - Create a new recurring event and modify the original one to make it end at the end of the day before of the clicked date
                if ( mode === 'future' )
                {
                    // Find the original recurring event from db
                    const originalRecurringEvent = this._events.find((item) => item.id === event.recurringEventId);

                    // Update the end date
                    originalRecurringEvent.end = moment(originalEvent.start).subtract(1, 'day').endOf('day').toISOString();

                    // Parse the recurrence rules from the original event
                    const parsedRules = {};
                    originalEvent.recurrence.split(';').forEach((rule) => {
                        const parsedRule = rule.split('=');
                        parsedRules[parsedRule[0]] = parsedRule[1];
                    });

                    // Add/Update the UNTIL rule
                    parsedRules['UNTIL'] = moment(originalRecurringEvent.end).utc().format('YYYYMMDD[T]HHmmss[Z]');

                    // Generate the rule string from the parsed rules
                    const rules = [];
                    Object.keys(parsedRules).forEach((key) => {
                        rules.push(key + '=' + parsedRules[key]);
                    });
                    const rrule = rules.join(';');

                    // Update the recurrence on the original recurring event
                    originalRecurringEvent.recurrence = rrule;

                    // Create a new event from the event while ignoring the recurringEventId
                    const {recurringEventId, ...newEvent} = event;

                    // Generate a unique id for the event
                    newEvent.id = AsmMockApiUtils.guid();

                    // Push the new event to the events array
                    this._events.push(newEvent);
                }

                // All - Update the recurring event
                if ( mode === 'all' )
                {
                    // Find the event index
                    const eventIndex = this._events.findIndex((item) => item.id === event.recurringEventId);

                    // Update the recurring event
                    this._events[eventIndex] = _.assign({}, this._events[eventIndex], _.omit(event, ['id', 'recurringEventId', 'range']));
                }

                return [
                    200,
                    true
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Recurring Event - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onDelete('api/apps/calendar/recurring-event')
            .reply((request) => {

                // Get the id and mode
                const id = request.params.get('id');
                const start = request.params.get('start');
                const mode = request.params.get('mode');

                // Find the event
                const event = this._events.find((item) => item.id === id);

                // Single - Add an exception to the recurring event
                if ( mode === 'single' )
                {
                    // Add a new exception for the recurring event that ignores this single event's start date
                    this._exceptions.push({
                        id     : AsmMockApiUtils.guid(),
                        eventId: id,
                        exdate : moment(start).toISOString()
                    });
                }

                // Future - Modify the event to make it end at the end of the day before of the clicked date
                if ( mode === 'future' )
                {
                    // Update the end date of the event
                    event.end = moment(start).subtract(1, 'day').endOf('day').toISOString();

                    // Parse the recurrence rules of the event
                    const parsedRules = {};
                    event.recurrence.split(';').forEach((rule) => {
                        const parsedRule = rule.split('=');
                        parsedRules[parsedRule[0]] = parsedRule[1];
                    });

                    // Add/Update the UNTIL rule
                    parsedRules['UNTIL'] = moment(event.end).utc().format('YYYYMMDD[T]HHmmss[Z]');

                    // Generate the rule string from the parsed rules
                    const rules = [];
                    Object.keys(parsedRules).forEach((key) => {
                        rules.push(key + '=' + parsedRules[key]);
                    });
                    const rrule = rules.join(';');

                    // Update the recurrence of the event
                    event.recurrence = rrule;
                }

                // All - Delete the recurring event
                if ( mode === 'all' )
                {
                    // Find the event and delete it
                    const index = this._events.findIndex((item) => item.id === id);
                    this._events.splice(index, 1);
                }

                return [
                    200,
                    true
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
