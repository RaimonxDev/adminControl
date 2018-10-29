import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
     * @param {ActivatedRoute} _activatedRoute
     * @param {AsmConfigService} _asmConfigService
     * @param {AuthService} _authService
     * @param {Router} _router
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _asmConfigService: AsmConfigService,
        private _authService: AuthService,
        private _router: Router
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
            .subscribe(() => {

                // Set the redirect url
                const redirectURL = this._activatedRoute.snapshot.queryParams['redirectURL'] || '/';

                // If the redirect url parameter exits...
                if ( redirectURL )
                {
                    // navigate to it
                    this._router.navigateByUrl(redirectURL);
                }

            }, (error) => {
                console.log(error);
            });
    }

    logout(): void
    {
        this._authService.logout();
    }
}
