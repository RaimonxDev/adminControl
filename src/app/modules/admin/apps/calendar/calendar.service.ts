import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import * as moment from 'moment';
import { Calendar, CalendarEvent } from 'app/modules/admin/apps/calendar/calendar.type';

@Injectable({
    providedIn: 'root'
})
export class CalendarService
{
    // Private
    private _calendars: BehaviorSubject<Calendar[] | null>;
    private _events: BehaviorSubject<CalendarEvent[] | null>;
    private _loadedEventsRange: { start: string, end: string };
    private readonly _numberOfDaysToPrefetch = 60;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the private defaults
        this._calendars = new BehaviorSubject(null);
        this._events = new BehaviorSubject(null);
        this._loadedEventsRange = {
            start: '',
            end  : ''
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for calendars
     */
    get calendars$(): Observable<Calendar[]>
    {
        return this._calendars.asObservable();
    }

    /**
     * Getter for events
     */
    get events$(): Observable<CalendarEvent[]>
    {
        return this._events.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get calendars
     */
    getCalendars(): Observable<Calendar[]>
    {
        return this._httpClient.get<Calendar[]>('api/apps/calendar/calendars').pipe(
            tap((response) => {
                this._calendars.next(response);
            })
        );
    }

    /**
     * Get events
     */
    getEvents(start, end): Observable<CalendarEvent[]>
    {
        // Set the new start date for loaded events
        if ( !this._loadedEventsRange.start || moment(start).isBefore(moment(this._loadedEventsRange.start)) )
        {
            this._loadedEventsRange.start = start;
        }

        // Set the new end date for loaded events
        if ( !this._loadedEventsRange.end || moment(end).isAfter(moment(this._loadedEventsRange.end)) )
        {
            this._loadedEventsRange.end = end;
        }

        // Get the events
        return this._httpClient.get<CalendarEvent[]>('api/apps/calendar/events', {
            params: {
                start,
                end
            }
        }).pipe(
            switchMap(response => this._events.pipe(
                take(1),
                map((events) => {

                    // If events is null, replace it with an empty array
                    events = events || [];

                    // Execute the observable
                    this._events.next([...events, ...response]);

                    // Return the response
                    return response;
                })
            ))
        );
    }

    /**
     * Prefetch future events
     *
     * @param end
     */
    prefetchFutureEvents(end): Observable<CalendarEvent[]>
    {
        // Calculate the remaining prefetched days
        const remainingDays = moment(this._loadedEventsRange.end).diff(moment(end), 'days');

        // Return, if remaining days is bigger than the number
        // of days to prefetch. This means we were already been
        // there and fetched the events data so no need for doing
        // it again.
        if ( remainingDays >= this._numberOfDaysToPrefetch )
        {
            return of([]);
        }

        // Figure out the start and end dates
        const start = this._loadedEventsRange.end;
        end = moment(this._loadedEventsRange.end).add(this._numberOfDaysToPrefetch - remainingDays, 'days').toISOString();

        // Prefetch the events
        return this.getEvents(start, end);
    }

    /**
     * Prefetch past events
     *
     * @param start
     */
    prefetchPastEvents(start): Observable<CalendarEvent[]>
    {
        // Calculate the remaining prefetched days
        const remainingDays = moment(start).diff(moment(this._loadedEventsRange.start), 'days');

        // Return, if remaining days is bigger than the number
        // of days to prefetch. This means we were already been
        // there and fetched the events data so no need for doing
        // it again.
        if ( remainingDays >= this._numberOfDaysToPrefetch )
        {
            return of([]);
        }

        // Figure out the start and end dates
        start = moment(this._loadedEventsRange.start).subtract(this._numberOfDaysToPrefetch - remainingDays, 'days').toISOString();
        const end = this._loadedEventsRange.start;

        // Prefetch the events
        return this.getEvents(start, end);
    }

    /**
     * Update the event
     *
     * @param id
     * @param event
     */
    updateEvent(id, event): Observable<CalendarEvent>
    {
        return this.events$
                   .pipe(
                       take(1),
                       switchMap(events => this._httpClient.patch<CalendarEvent>('api/apps/calendar/event', {
                           id,
                           event
                       }).pipe(
                           map((updatedEvent) => {

                               // Find the index of the updated event
                               const index = events.findIndex(item => item.id === id);

                               // Update the event
                               events[index] = updatedEvent;

                               // Update the events
                               this._events.next(events);

                               // Return the updated event
                               return updatedEvent;
                           })
                       ))
                   );
    }
}
