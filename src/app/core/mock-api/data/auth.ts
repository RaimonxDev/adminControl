import { Injectable } from '@angular/core';
import MockAdapter from 'axios-mock-adapter';

@Injectable({
    providedIn: 'root'
})
export class MockAuthData
{
    // Data
    private _user = {
        id         : '1',
        username   : 'watkins',
        name       : 'Andrew Watkins',
        email      : 'watkinsandrew@mail.com',
        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBc3NlbWJseSIsImlhdCI6MTU0MDM4NTAyMCwiZXhwIjoxNjM1MDc5NDIwLCJhdWQiOiIiLCJzdWIiOiIiLCJpZCI6IjEiLCJ1c2VybmFtZSI6IndhdGtpbnMiLCJuYW1lIjoiQW5kcmV3IFdhdGtpbnMiLCJlbWFpbCI6IndhdGtpbnNhbmRyZXdAbWFpbC5jb20ifQ.qAeRZDE3AqdyjYB9GEc7FXvAGY50TZz99-fZ2uSwVeM'
    };

    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Initialize
     *
     * @param mock
     */
    init(mock: MockAdapter): void
    {
        // Login
        mock.onPost('api/auth')
            .reply((config) => {

                // Parse the data
                const data = JSON.parse(config.data);

                // Login successful
                if ( data.username === 'watkins' && data.password === 'admin' )
                {
                    return [
                        200,
                        {
                            user: this._user
                        }
                    ];
                }

                // Invalid credentials
                return [
                    403,
                    {
                        message: 'Wrong username or password'
                    }
                ];
            });
    }
}
