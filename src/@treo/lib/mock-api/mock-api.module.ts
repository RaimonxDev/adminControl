import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MOCK_API_DEFAULT_DELAY } from '@treo/lib/mock-api/mock-api.constants';
import { TreoMockApiInterceptor } from '@treo/lib/mock-api/mock-api.interceptor';
import { TreoMockApiService } from '@treo/lib/mock-api/mock-api.service';

@NgModule({
    providers: [
        TreoMockApiService,
        {
            provide : HTTP_INTERCEPTORS,
            useClass: TreoMockApiInterceptor,
            multi   : true
        }
    ]
})
export class TreoMockApiModule
{
    /**
     * TreoMockApi module default configuration.
     *
     * @param config.mockServices - Array of services that implements TreoMockApi to register mock API routes
     * @param config.delay - Default delay value in milliseconds to apply all responses
     */
    static forRoot(config: { mockServices: any[], delay?: number }): ModuleWithProviders<TreoMockApiModule>
    {
        return {
            ngModule : TreoMockApiModule,
            providers: [
                {
                    provide   : APP_INITIALIZER,
                    deps      : config.mockServices,
                    useFactory: () => () => null,
                    multi     : true
                },
                {
                    provide : MOCK_API_DEFAULT_DELAY,
                    useValue: config.delay ?? 0,
                    multi   : true
                }
            ]
        };
    }
}
