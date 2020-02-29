import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AsmConfigModule } from '@assembly/services/config';
import { AsmDrawerModule } from '@assembly/components/drawer';
import { SharedModule } from 'app/core/shared/shared.module';
import { MainComponent } from 'app/core/main/main.component';
import { LayoutsModule } from 'app/core/main/layouts/layouts.module';
import { appConfig } from 'app/core/config';

@NgModule({
    declarations: [
        MainComponent
    ],
    imports     : [
        MatIconModule,
        MatRadioModule,
        MatSlideToggleModule,
        AsmConfigModule.forRoot(appConfig),
        AsmDrawerModule,
        LayoutsModule,
        SharedModule
    ]
})
export class MainModule
{
}
