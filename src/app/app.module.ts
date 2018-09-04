import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AsmCoreModule } from '@assembly/core.module';
import { AsmSharedModule } from '@assembly/shared.module';

import { assemblyConfig } from 'app/core/config/assembly.config';

import { CoreModule } from 'app/core/core.module';
import { AppComponent } from 'app/app.component';
import { RouterModule } from '@angular/router';

const routes = [];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(routes),

        // Assembly core module
        AsmCoreModule.forRoot(assemblyConfig),

        // Assembly shared module
        AsmSharedModule,

        // App core module
        CoreModule,
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
