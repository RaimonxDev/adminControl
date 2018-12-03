import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// 3rd party modules

// Assembly modules and components

// App components & modules
import { AppComponent } from 'app/app.component';
import { CoreModule } from 'app/core/core.module';
import { AppsModule } from 'app/modules/apps/apps.module';
import { PagesModule } from 'app/modules/pages/pages.module';
import { UIModule } from 'app/modules/ui/ui.module';
import { DocsModule } from 'app/modules/docs/docs.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([]),

        // 3rd party modules

        // App core module
        CoreModule,

        // Apps module
        AppsModule,

        // Pages module
        PagesModule,

        // UI module
        UIModule,

        // Docs module
        DocsModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
