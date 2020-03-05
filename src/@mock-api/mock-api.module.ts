import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AsmMockApiInterceptor } from '@mock-api/mock-api.interceptor';
import { AsmMockApiService } from '@mock-api/mock-api.service';

@NgModule({
    providers: [
        AsmMockApiService,
        {
            provide : HTTP_INTERCEPTORS,
            useClass: AsmMockApiInterceptor,
            multi   : true
        }
    ]
})
export class AsmMockApiModule
{
    /**
     * forRoot method for setting user configuration
     *
     * @param mockDataServices
     */
    static forRoot(mockDataServices: any[]): ModuleWithProviders
    {
        return {
            ngModule : AsmMockApiModule,
            providers: [
                {
                    provide   : APP_INITIALIZER,
                    deps      : mockDataServices,
                    useFactory: () => () => null,
                    multi     : true
                },
            ]
        };
    }
}
