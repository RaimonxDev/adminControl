import { Component } from '@angular/core';

import { AsmConfigService } from '@assembly/services/config.service';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector   : 'login',
    templateUrl: './login.component.html',
    styleUrls  : ['./login.component.scss']
})
export class LoginComponent
{
    /**
     * Constructor
     *
     * @param {AsmConfigService} _asmConfigService
     * @param {AuthService} _authService
     */
    constructor(
        private _asmConfigService: AsmConfigService,
        private _authService: AuthService
    )
    {
        // Set the layout options
        this._asmConfigService.config = {
            layout: {
                options: {
                    navigation: {
                        hidden: true
                    },
                    header    : {
                        hidden: true
                    },
                    footer    : {
                        hidden: true
                    }
                }
            }
        };
    }

    login(): void
    {
        this._authService.login('watkins', 'admin')
            .subscribe((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    }

    logout(): void
    {
        this._authService.logout();
    }
}
