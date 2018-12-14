import { Injectable } from '@angular/core';
import { AsmMockApiService } from '@assembly';

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
     *
     * @param {AsmMockApiService} _asmMockApiService
     */
    constructor(
        private _asmMockApiService: AsmMockApiService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Initialize
     */
    init(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Changelog
        // -----------------------------------------------------------------------------------------------------

        this._asmMockApiService
            .onGet('api/docs/changelog')
            .reply(() => {
                return [
                    200,
                    this._docs.changelog
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Getting started
        // -----------------------------------------------------------------------------------------------------

        this._asmMockApiService
            .onGet('api/docs/getting-started')
            .reply(() => {
                return [
                    200,
                    this._docs.gettingStarted
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Building and serving
        // -----------------------------------------------------------------------------------------------------

        this._asmMockApiService
            .onGet('api/docs/building-and-serving')
            .reply(() => {
                return [
                    200,
                    this._docs.buildingAndServing
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Fundamentals
        // -----------------------------------------------------------------------------------------------------

        // ...
        this._asmMockApiService
            .onGet('api/docs/fundamentals')
            .reply(() => {
                return [
                    200,
                    {}
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Components
        // -----------------------------------------------------------------------------------------------------

        // Navigation
        this._asmMockApiService
            .onGet('api/docs/components/navigation')
            .reply(() => {
                return [
                    200,
                    this._docs.components.navigation
                ];
            });
    }
}
