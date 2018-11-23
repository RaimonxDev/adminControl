import { Injectable } from '@angular/core';
import MockAdapter from 'axios-mock-adapter';

import { mockWithAuth } from 'app/core/mock-api/with-auth';
import { docs } from './data';

@Injectable({
    providedIn: 'root'
})
export class MockDocsApi
{
    // Data
    private _docs = docs;

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
        // -----------------------------------------------------------------------------------------------------
        // @ Changelog
        // -----------------------------------------------------------------------------------------------------

        mock.onGet('api/docs/changelog')
            .reply(mockWithAuth((config) => {
                return [
                    200,
                    this._docs.changelog
                ];
            }));

        // -----------------------------------------------------------------------------------------------------
        // @ Getting started
        // -----------------------------------------------------------------------------------------------------

        mock.onGet('api/docs/getting-started')
            .reply(mockWithAuth((config) => {
                return [
                    200,
                    this._docs.gettingStarted
                ];
            }));

        // -----------------------------------------------------------------------------------------------------
        // @ Building and serving
        // -----------------------------------------------------------------------------------------------------

        mock.onGet('api/docs/building-and-serving')
            .reply(mockWithAuth((config) => {
                return [
                    200,
                    this._docs.buildingAndServing
                ];
            }));

        // -----------------------------------------------------------------------------------------------------
        // @ Fundamentals
        // -----------------------------------------------------------------------------------------------------

        // ...
        mock.onGet('api/docs/fundamentals')
            .reply(mockWithAuth((config) => {
                return [
                    200,
                    {}
                ];
            }));

        // -----------------------------------------------------------------------------------------------------
        // @ Components
        // -----------------------------------------------------------------------------------------------------

        // Navigation
        mock.onGet('api/docs/components/navigation')
            .reply(mockWithAuth((config) => {
                return [
                    200,
                    this._docs.components.navigation
                ];
            }));
    }
}
