import { Injectable } from '@angular/core';
import { AsmMockApi } from '@mock-api/core/mock-api.interface';
import { AsmMockApiService } from '@mock-api/core/mock-api.service';
import { docs } from './data';

@Injectable({
    providedIn: 'root'
})
export class DocsMockApi implements AsmMockApi
{
    // Private Readonly
    private readonly _docs: any;

    /**
     * Constructor
     *
     * @param {AsmMockApiService} _asmMockApiService
     */
    constructor(
        private _asmMockApiService: AsmMockApiService
    )
    {
        // Set the data
        this._docs = docs;

        // Register the API endpoints
        this.register();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register
     */
    register(): void
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
