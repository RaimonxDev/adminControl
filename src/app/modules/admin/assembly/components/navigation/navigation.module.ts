import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { AsmHighlightModule, AsmMessageModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { NavigationComponent } from 'app/modules/admin/assembly/components/navigation/navigation.component';
import { navigationRoutes } from 'app/modules/admin/assembly/components/navigation/navigation.routing';

@NgModule({
    declarations: [
        NavigationComponent
    ],
    imports     : [
        RouterModule.forChild(navigationRoutes),
        MatButtonModule,
        MatIconModule,
        AsmHighlightModule,
        AsmMessageModule,
        SharedModule
    ]
})
export class NavigationModule
{
}
