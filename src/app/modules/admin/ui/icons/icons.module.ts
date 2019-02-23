import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { SharedModule } from 'app/shared/shared.module';
import { IconsComponent } from 'app/modules/admin/ui/icons/icons.component';
import { iconRoutes } from 'app/modules/admin/ui/icons/icons.routing';

@NgModule({
    declarations: [
        IconsComponent
    ],
    imports     : [
        ReactiveFormsModule,
        RouterModule.forChild(iconRoutes),
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
