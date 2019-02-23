import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AsmCoreModule } from '@assembly';
import { AsmMockApiModule } from '@mock-api/mock-api.module';
import { CoreModule } from 'app/core/core.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),

        // Assembly Core
        AsmCoreModule,

        // App Core
        CoreModule,

        // Assembly Mock API
        AsmMockApiModule,

    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
