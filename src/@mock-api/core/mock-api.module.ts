import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { asmMockApiData } from '@mock-api/data/mock-data';
import { AsmMockApiInterceptor } from '@mock-api/core/mock-api.interceptor';
import { AsmMockApiService } from '@mock-api/core/mock-api.service';

@NgModule({
    providers: [
        AsmMockApiService,
        {
            provide   : APP_INITIALIZER,
            deps      : asmMockApiData,
            useFactory: () => () => null,
            multi     : true
        },
        {
            provide : HTTP_INTERCEPTORS,
            useClass: AsmMockApiInterceptor,
            multi   : true
        }
    ]
})
export class AsmMockApiModule
{
}
