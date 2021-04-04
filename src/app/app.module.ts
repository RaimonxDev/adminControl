import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { TreoModule } from '@treo';
import { TreoConfigModule } from '@treo/services/config';
import { TreoMockApiModule } from '@treo/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptorService } from './shared/services/loader-interceptor.service';
import localeEs from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeEs, "es");

const routerConfig: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    preloadingStrategy       : PreloadAllModules,
    relativeLinkResolution   : 'legacy',
};

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // Treo & Treo Mock API
        TreoModule,
        TreoConfigModule.forRoot(appConfig),
        TreoMockApiModule.forRoot(mockApiServices),

        // Core
        CoreModule,

        // Layout
        LayoutModule,

        // 3rd party modules
        MarkdownModule.forRoot({})
    ],
    providers:[
       {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi:true},
       {provide: LOCALE_ID, useValue:'es'}
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
