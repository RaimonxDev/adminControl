import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AsmDateRangeModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { CalendarComponent } from 'app/modules/admin/apps/calendar/calendar.component';
import { CalendarSettingsComponent } from 'app/modules/admin/apps/calendar/settings/settings.component';
import { calendarRoutes } from 'app/modules/admin/apps/calendar/calendar.routing';

@NgModule({
    declarations: [
        CalendarComponent,
        CalendarSettingsComponent
    ],
    imports     : [
        RouterModule.forChild(calendarRoutes),
        ScrollingModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMomentDateModule,
        MatSelectModule,
        MatSidenavModule,
        FullCalendarModule,
        AsmDateRangeModule,
        SharedModule
    ],
    providers   : [
        {
            provide : MAT_DATE_FORMATS,
            useValue: {
                parse  : {
                    dateInput: 'DD.MM.YYYY'
                },
                display: {
                    dateInput         : 'DD.MM.YYYY',
                    monthYearLabel    : 'MMM YYYY',
                    dateA11yLabel     : 'DD.MM.YYYY',
                    monthYearA11yLabel: 'MMMM YYYY'
                }
            }
        }
    ]
})
export class CalendarModule
{
}
