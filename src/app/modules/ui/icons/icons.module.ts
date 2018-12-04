import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { SharedModule } from 'app/core/shared.module';

import { IconsComponent } from 'app/modules/ui/icons/icons.component';
import { IconsService } from 'app/modules/ui/icons/icons.service';

// Routes
const routes: Route[] = [
    {
        // Redirect /icons to /icons/material-outline
        path      : 'icons',
        redirectTo: 'icons/material-outline',
        pathMatch : 'full'
    },
    {
        path     : '**',
        component: IconsComponent,
        resolve  : {
            icons: IconsService
        }
    }
];

@NgModule({
    declarations: [
        IconsComponent
    ],
    imports     : [
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        SharedModule
    ]
})
export class IconsModule
{
}
