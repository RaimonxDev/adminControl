import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// App component & app modules
import { AppComponent } from 'app/app.component';

import { AuthModule } from 'app/core/auth/auth.module';
import { MockApiModule } from 'app/core/mock-api/mock-api.module';
import { LayoutsModule } from 'app/core/layouts/layouts.module';

import { AppsModule } from 'app/modules/apps/apps.module';
import { DocsModule } from 'app/modules/docs/docs.module';
import { PagesModule } from 'app/modules/pages/pages.module';
import { UIModule } from 'app/modules/ui/ui.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([]),

        // App core modules
        AuthModule,
        MockApiModule,
        LayoutsModule,

        // App modules
        AppsModule,
        DocsModule,
        PagesModule,
        UIModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
