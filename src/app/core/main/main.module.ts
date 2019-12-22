import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AsmDrawerModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { MainComponent } from 'app/core/main/main.component';
import { LayoutsModule } from 'app/core/main/layouts/layouts.module';

@NgModule({
    declarations: [
        MainComponent
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,
        MatRadioModule,
        MatSlideToggleModule,
        AsmDrawerModule,
        LayoutsModule,
        SharedModule
    ]
})
export class MainModule
{
}
