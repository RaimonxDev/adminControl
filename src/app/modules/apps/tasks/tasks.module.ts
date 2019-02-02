import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material';
import { SharedModule } from 'app/core/shared.module';

import { tasksRoutes } from 'app/modules/apps/tasks/tasks.routing';
import { TasksComponent } from 'app/modules/apps/tasks/tasks.component';
import { TasksDetailsComponent } from 'app/modules/apps/tasks/details/details.component';
import { TasksListComponent } from 'app/modules/apps/tasks/list/list.component';

@NgModule({
    declarations: [
        TasksComponent,
        TasksDetailsComponent,
        TasksListComponent
    ],
    imports     : [
        RouterModule.forChild(tasksRoutes),
        MatSidenavModule,
        SharedModule
    ]
})
export class TasksModule
{
}
