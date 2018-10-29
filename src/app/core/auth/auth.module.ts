import { NgModule } from '@angular/core';

import { AuthService } from 'app/core/auth/auth.service';
import { JWTAuthService } from 'app/core/auth/jwt/jwt-auth.service';

@NgModule({
    providers: [
        {
            provide : AuthService,
            useClass: JWTAuthService // You can easily switch the implementation by changing this
        }
    ]
})
export class AuthModule
{
    /**
     * Constructor
     *
     * @param _authService
     */
    constructor(
        private _authService: AuthService
    )
    {

    }
}
