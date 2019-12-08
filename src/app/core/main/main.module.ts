import { NgModule } from '@angular/core';
import { MainComponent } from 'app/core/main/main.component';
import { LayoutsModule } from 'app/core/main/layouts/layouts.module';
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
