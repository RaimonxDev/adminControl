import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PortalModule } from '@angular/cdk/portal';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'app/shared/shared.module';
import { AngularMaterialComponent } from 'app/modules/admin/ui/angular-material/angular-material.component';
import { AngularMaterialComponentApiComponent, AngularMaterialComponentExamplesComponent, AngularMaterialComponentOverviewComponent, AngularMaterialComponentViewerComponent } from 'app/modules/admin/ui/angular-material/component-viewer/component-viewer.component';
import { AngularMaterialDocViewerComponent } from 'app/modules/admin/ui/angular-material/doc-viewer/doc-viewer.component';
import { AngularMaterialExampleViewerComponent } from 'app/modules/admin/ui/angular-material/example-viewer/example-viewer.component';
import { angularMaterialRoutes } from 'app/modules/admin/ui/angular-material/angular-material.routing';
import { ExampleModule } from 'app/modules/admin/ui/angular-material/example.module';

@NgModule({
    declarations   : [
        AngularMaterialComponent,
        AngularMaterialComponentViewerComponent,
        AngularMaterialComponentOverviewComponent,
        AngularMaterialComponentApiComponent,
        AngularMaterialComponentExamplesComponent,
        AngularMaterialDocViewerComponent,
        AngularMaterialExampleViewerComponent
    ],
    entryComponents: [
        AngularMaterialExampleViewerComponent
    ],
    imports        : [
        RouterModule.forChild(angularMaterialRoutes),
        PortalModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        MatTabsModule,
        MatTooltipModule,
        SharedModule,
        ExampleModule
    ],
    exports        : [
        AngularMaterialDocViewerComponent,
        AngularMaterialExampleViewerComponent
    ]
})
export class AngularMaterialModule
{
}
