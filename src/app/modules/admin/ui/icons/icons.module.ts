import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AsmHighlightModule } from '@assembly/components/highlight';
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
        AsmHighlightModule,
        SharedModule
    ]
})
export class IconsModule
{
}
