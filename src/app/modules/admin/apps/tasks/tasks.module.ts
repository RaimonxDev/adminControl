import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MAT_DATE_FORMATS, MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatTooltipModule } from '@angular/material';
import { MomentDateModule } from '@angular/material-moment-adapter';
import * as moment from 'moment';
import { AsmLookUpByPipeModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { tasksRoutes } from 'app/modules/admin/apps/tasks/tasks.routing';
import { TasksComponent } from 'app/modules/admin/apps/tasks/tasks.component';
import { TasksDetailsComponent } from 'app/modules/admin/apps/tasks/details/details.component';
import { TasksListComponent } from 'app/modules/admin/apps/tasks/list/list.component';

export const CUSTOM_DATE_FORMAT = {
    parse  : {
        dateInput: moment.ISO_8601
    },
    display: {
        dateInput         : 'll',
        monthYearLabel    : 'MMMM YYYY',
        dateA11yLabel     : 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
    }
};

@NgModule({
    declarations: [
        TasksComponent,
        TasksDetailsComponent,
        TasksListComponent
    ],
    imports     : [
        RouterModule.forChild(tasksRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatTooltipModule,
        MomentDateModule,
        AsmLookUpByPipeModule,
        SharedModule
    ],
    providers   : [
        {
            provide : MAT_DATE_FORMATS,
            useValue: CUSTOM_DATE_FORMAT
        }
    ]
})
export class TasksModule
{
}