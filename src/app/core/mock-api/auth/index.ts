import { Injectable } from '@angular/core';
import MockAdapter from 'axios-mock-adapter';

import { user } from './data';

@Injectable({
    providedIn: 'root'
})
export class MockAuthData
{
    // Data
    private _user = user;

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
