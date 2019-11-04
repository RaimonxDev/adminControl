import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PortalModule } from '@angular/cdk/portal';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'app/shared/shared.module';
import { MaterialComponentsComponent } from 'app/modules/admin/ui/material-components/material-components.component';
import { MaterialComponentsComponentApiComponent, MaterialComponentsComponentExamplesComponent, MaterialComponentsComponentOverviewComponent, MaterialComponentsComponentViewerComponent } from 'app/modules/admin/ui/material-components/component-viewer/component-viewer.component';
import { MaterialComponentsDocViewerComponent } from 'app/modules/admin/ui/material-components/doc-viewer/doc-viewer.component';
import { MaterialComponentsExampleViewerComponent } from 'app/modules/admin/ui/material-components/example-viewer/example-viewer.component';
import { MaterialComponentsExampleModule } from 'app/modules/admin/ui/material-components/example.module';
import { materialComponentsRoutes } from 'app/modules/admin/ui/material-components/material-components.routing';

@NgModule({
    declarations   : [
        MaterialComponentsComponent,
        MaterialComponentsComponentViewerComponent,
        MaterialComponentsComponentOverviewComponent,
        MaterialComponentsComponentApiComponent,
        MaterialComponentsComponentExamplesComponent,
        MaterialComponentsDocViewerComponent,
        MaterialComponentsExampleViewerComponent
    ],
    entryComponents: [
        MaterialComponentsExampleViewerComponent
    ],
    imports        : [
        RouterModule.forChild(materialComponentsRoutes),
        PortalModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        MatTabsModule,
        MatTooltipModule,
        SharedModule,
        MaterialComponentsExampleModule
    ],
    exports        : [
        MaterialComponentsDocViewerComponent,
        MaterialComponentsExampleViewerComponent
    ]
})
export class MaterialComponentsModule
{
}
