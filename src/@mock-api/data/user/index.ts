import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmMockApiService } from '@mock-api/mock-api.service';
import { user as userData } from '@mock-api/data/user/data';

@Injectable({
    providedIn: 'root'
})
export class MockUserApi
{
    // Private
    private _user: any;

    /**
     * Constructor
     *
     * @param _asmMockApiService
     */
    constructor(
        private _asmMockApiService: AsmMockApiService
    )
    {
        // Set the data
        this._user = userData;
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
        // @ User - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/user')
            .reply(() => {
                return [
                    200,
                    {
                        user: _.cloneDeep(this._user)
                    }
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ User - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onPatch('api/user')
            .reply((request) => {

                // Get the user data
                const user = _.cloneDeep(request.body.user);

                // Update the user data
                this._user = _.assign({}, this._user, user);

                return [
                    200,
                    {
                        user: _.cloneDeep(this._user)
                    }
                ];
            });
    }
}