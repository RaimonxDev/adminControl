import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CalendarService } from 'app/modules/admin/apps/calendar/calendar.service';
import { Calendar } from 'app/modules/admin/apps/calendar/calendar.type';

@Injectable({
    providedIn: 'root'
})
export class CalendarCalendarsResolver implements Resolve<any>
{
    /**
     * Constructor
     *
     * @param {CalendarService} _calendarService
     */
    constructor(
        private _calendarService: CalendarService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Calendar[]>
    {
        return this._calendarService.getCalendars();
    }
}
