import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsmHighlightModule, AsmMessageModule } from '@assembly';
import { SharedModule } from 'app/core/shared/shared.module';
import { DocsComponent } from 'app/modules/admin/docs/docs.component';
import { docsRoutes } from 'app/modules/admin/docs/docs.routing';

@NgModule({
    declarations: [
        DocsComponent
    ],
    imports     : [
        RouterModule.forChild(docsRoutes),
        AsmHighlightModule,
        AsmMessageModule,
        SharedModule
    ]
})
export class DocsModule
{
}
