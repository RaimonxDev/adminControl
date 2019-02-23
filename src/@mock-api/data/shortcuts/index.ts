import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmMockApiService } from '@mock-api/mock-api.service';
import { shortcuts } from '@mock-api/data/shortcuts/data';

@Injectable({
    providedIn: 'root'
})
export class MockShortcutsApi
{
    // Private Readonly
    private readonly _shortcuts: any;

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
        this._shortcuts = shortcuts;
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
        // @ Shortcuts - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/shortcuts')
            .reply(() => {
                return [
                    200,
                    {
                        shortcuts: _.cloneDeep(this._shortcuts)
                    }
                ];
            });
    }
}
