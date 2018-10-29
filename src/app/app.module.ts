import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AsmSharedModule } from '@assembly/shared.module';

import { CoreModule } from 'app/core/core.module';
import { AppComponent } from 'app/app.component';

import { AppsModule } from 'app/modules/apps/apps.module';
import { PagesModule } from 'app/modules/pages/pages.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([]),

        // Assembly shared module
        AsmSharedModule,

        // App core module
        CoreModule,

        // Apps module
        AppsModule,

        // Pages module
        PagesModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
