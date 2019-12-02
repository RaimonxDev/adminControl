import { NgModule } from '@angular/core';
import { LayoutsModule } from 'app/core/layouts/layouts.module';
import { MainComponent } from 'app/core/main/main.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    declarations: [
        MainComponent
    ],
    imports     : [
        LayoutsModule,
        SharedModule
    ]
})
export class MainModule
{
}
