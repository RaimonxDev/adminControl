import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AsmHighlightModule } from '@assembly';
import { SharedModule } from 'app/core/shared.module';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';

import { DocsService } from 'app/modules/docs/docs.service';
import { DocsComponent } from 'app/modules/docs/docs.component';

// Routes
const routes: Route[] = [
    {
        path    : 'docs',
        children: [
            {
                path     : '**',
                component: DocsComponent,
                // canActivate : [AuthGuard],
                resolve  : {
                    documentation: DocsService
                }
            }
        ]
    }
];

@NgModule({
    declarations: [
        DocsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        AsmHighlightModule,
        SharedModule
    ]
})
export class DocsModule
{
}
