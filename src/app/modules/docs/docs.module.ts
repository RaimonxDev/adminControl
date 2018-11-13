import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AsmHighlightModule } from '@assembly';

import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { DocsService } from 'app/modules/docs/docs.service';
import { DocsComponent } from 'app/modules/docs/docs.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        AsmHighlightModule
    ]
})
export class DocsModule
{
}
