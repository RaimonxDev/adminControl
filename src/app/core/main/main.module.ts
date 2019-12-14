import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
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
        AsmDrawerModule,
        LayoutsModule,
        SharedModule
    ]
})
export class MainModule
{
}
