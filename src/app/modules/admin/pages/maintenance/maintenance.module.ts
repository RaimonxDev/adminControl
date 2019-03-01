import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';
import { MaintenanceComponent } from 'app/modules/admin/pages/maintenance/maintenance.component';
import { maintenanceRoutes } from 'app/modules/admin/pages/maintenance/maintenance.routing';

@NgModule({
    declarations: [
        MaintenanceComponent
    ],
    imports     : [
        RouterModule.forChild(maintenanceRoutes),
        MatButtonModule
    ]
})
export class MaintenanceModule
{
}
