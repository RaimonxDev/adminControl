import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AsmMockApiService } from '@assembly/services/mock-api/mock-api.service';
import { AsmMockApiInterceptor } from '@assembly/services/mock-api/mock-api.interceptor';

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
}
