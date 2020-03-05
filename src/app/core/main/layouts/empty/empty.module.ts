import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { EmptyLayoutComponent } from 'app/core/main/layouts/empty/empty.component';

@NgModule({
    declarations: [
        EmptyLayoutComponent
    ],
    imports     : [
        RouterModule,
        SharedModule
    ],
    exports     : [
        EmptyLayoutComponent
    ]
})
export class EmptyLayoutModule
{
}
