import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AuthService } from 'app/core/auth/auth.service';
import { AuthInterceptor } from 'app/core/auth/auth.interceptor';
import { JWTUtilityService } from 'app/core/auth/jwt/jwt-utility.service';
import { PopulateModule } from 'app/core/populate/populate.module';

@NgModule({
    providers: [
        AuthService,
        JWTUtilityService,
        {
            provide : HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi   : true
        }
    ],
    imports  : [
        HttpClientModule,
        PopulateModule
    ]
})
export class AuthModule
{
}
