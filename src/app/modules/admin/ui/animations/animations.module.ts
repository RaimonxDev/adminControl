import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { SharedModule } from 'app/shared/shared.module';
import { AnimationsComponent } from 'app/modules/admin/ui/animations/animations.component';
import { animationsRoutes } from 'app/modules/admin/ui/animations/animations.routing';

@NgModule({
    declarations: [
        AnimationsComponent
    ],
    imports: [
        RouterModule.forChild(animationsRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        SharedModule,
    ]
})
export class AnimationsModule
{
}
