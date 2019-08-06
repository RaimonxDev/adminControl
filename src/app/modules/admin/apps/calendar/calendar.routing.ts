import { Route } from '@angular/router';
import { CalendarComponent } from 'app/modules/admin/apps/calendar/calendar.component';
import { CalendarCalendarsResolver } from 'app/modules/admin/apps/calendar/calendar.resolvers';

export const calendarRoutes: Route[] = [
    {
        path     : '',
        component: CalendarComponent,
        resolve  : {
            calendars: CalendarCalendarsResolver
        }
    }
];
