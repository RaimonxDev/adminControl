import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
     * @param {AuthService} _authService
     * @param {Router} _router
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _router: Router
    )
    {
        console.log('login component constructor');
    }

    login(): void
    {
        this._authService.login('watkins.andrew@company.com', 'admin')
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
