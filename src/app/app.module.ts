import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, RouterModule } from '@angular/router';
import { AsmCoreModule } from '@assembly';
import { AsmMockApiModule } from '@mock-api/mock-api.module';
import { CoreModule } from 'app/core/core.module';
import { AuthModule } from 'app/modules/auth/auth.module';
import { AdminModule } from 'app/modules/admin/admin.module';
import { AppComponent } from 'app/app.component';

const routerConfig: ExtraOptions = {
    scrollPositionRestoration: 'top'
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([], routerConfig),

        // Assembly Core
        AsmCoreModule,

        // App Core
        CoreModule,

        // Assembly Mock API
        AsmMockApiModule,

        // App Modules
        AuthModule,
        AdminModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
