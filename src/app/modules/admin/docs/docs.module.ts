import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsmHighlightModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { DocsComponent } from 'app/modules/admin/docs/docs.component';
import { docsRoutes } from 'app/modules/admin/docs/docs.routing';

@NgModule({
    declarations: [
        DocsComponent
    ],
    imports     : [
        RouterModule.forChild(docsRoutes),
        AsmHighlightModule,
        SharedModule
    ]
})
export class DocsModule
{
}
