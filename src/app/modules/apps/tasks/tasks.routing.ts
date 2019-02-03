import { Route } from '@angular/router';
import { CanDeactivateTasksDetails } from 'app/modules/apps/tasks/tasks.guards';
import {
    TasksCountResolver,
    TasksMembersResolver,
    TasksResolver,
    TasksTagsResolver,
    TasksTaskResolver
} from 'app/modules/apps/tasks/tasks.resolvers';
import { TasksComponent } from 'app/modules/apps/tasks/tasks.component';
import { TasksListComponent } from 'app/modules/apps/tasks/list/list.component';
import { TasksDetailsComponent } from 'app/modules/apps/tasks/details/details.component';

export const tasksRoutes: Route[] = [
    {
        path     : '',
        component: TasksComponent,
        resolve  : {
            count  : TasksCountResolver,
            members: TasksMembersResolver,
            tags   : TasksTagsResolver
        },
        children : [
            {
                path     : '',
                component: TasksListComponent,
                resolve  : {
                    tasks: TasksResolver
                },
                children : [
                    {
                        path         : ':id',
                        component    : TasksDetailsComponent,
                        resolve      : {
                            task: TasksTaskResolver
                        },
                        canDeactivate: [CanDeactivateTasksDetails]
                    }
                ]
            }
        ]
    }
];
