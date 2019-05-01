import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from 'app/modules/admin/apps/dashboard/dashboard.component';

const routes: Route[] = [
    {
        path     : '',
        component: DashboardComponent
    }
];

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule
    ]
})
export class DashboardModule
{
}
