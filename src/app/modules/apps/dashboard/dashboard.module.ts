import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from 'app/modules/apps/dashboard/dashboard.component';

const routes = [
    {
        path     : '**',
        component: DashboardComponent
    }
];

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports     : [
        RouterModule.forChild(routes)
    ]
})
export class DashboardModule
{
}
