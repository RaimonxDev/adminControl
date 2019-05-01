import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { AsmHighlightModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { AnimationsComponent } from 'app/modules/admin/assembly/components/animations/animations.component';
import { animationsRoutes } from 'app/modules/admin/assembly/components/animations/animations.routing';

@NgModule({
    declarations: [
        AnimationsComponent
    ],
    imports     : [
        RouterModule.forChild(animationsRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTabsModule,
        AsmHighlightModule,
        SharedModule
    ]
})
export class AnimationsModule
{
}
