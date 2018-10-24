import { NgModule } from '@angular/core';

import { AuthService } from 'app/core/auth/auth.service';
import { AuthInterceptors } from 'app/core/auth/auth.interceptors';

@NgModule()
export class AuthModule
{
    /**
     * Constructor
     *
     * @param _authService
     * @param _authInterceptors
     */
    constructor(
        private _authService: AuthService,
        private _authInterceptors: AuthInterceptors
    )
    {

    }
}
