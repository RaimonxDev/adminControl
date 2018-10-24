import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';

import { DashboardComponent } from 'app/modules/apps/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
        FormsModule,
        CommonModule,
        RouterModule.forChild(routes),

        MatButtonModule
    ]
})
export class DashboardModule
{
}
