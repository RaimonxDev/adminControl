import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmMockApi } from '@mock-api/mock-api.interface';
import { AsmMockApiService } from '@mock-api/mock-api.service';
import { AsmMockApiUtils } from '@mock-api/mock-api.utils';
import { shortcuts as shortcutsData } from '@mock-api/data/shortcuts/data';

@Injectable({
    providedIn: 'root'
})
export class ShortcutsMockApi implements AsmMockApi
{
    // Private
    private _shortcuts: any;

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
        this._shortcuts = shortcutsData;
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

        // -----------------------------------------------------------------------------------------------------
        // @ Shortcuts - PUT
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onPut('api/shortcuts')
            .reply((request) => {

                // Get the shortcut
                const newShortcut = _.cloneDeep(request.body.shortcut);

                // Generate a new GUID
                newShortcut.id = AsmMockApiUtils.guid();

                // Unshift the new shortcut
                this._shortcuts.unshift(newShortcut);

                return [
                    200,
                    newShortcut
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Shortcuts - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onPatch('api/shortcuts')
            .reply((request) => {

                // Get the id and shortcut
                const id = request.body.id;
                const shortcut = _.cloneDeep(request.body.shortcut);

                // Prepare the updated shortcut
                let updatedShortcut = null;

                // Find the shortcut and update it
                this._shortcuts.forEach((item, index, shortcuts) => {

                    if ( item.id === id )
                    {
                        // Update the shortcut
                        shortcuts[index] = _.assign({}, shortcuts[index], shortcut);

                        // Store the updated shortcut
                        updatedShortcut = shortcuts[index];
                    }
                });

                return [
                    200,
                    updatedShortcut
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Shortcuts - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onDelete('api/shortcuts')
            .reply((request) => {

                // Get the id
                const id = request.params.get('id');

                // Prepare the deleted shortcut
                let deletedShortcut = null;

                // Find the shortcut
                const index = this._shortcuts.findIndex((item) => item.id === id);

                // Store the deleted shortcut
                deletedShortcut = _.cloneDeep(this._shortcuts[index]);

                // Delete the shortcut
                this._shortcuts.splice(index, 1);

                return [
                    200,
                    deletedShortcut
                ];
            });
    }
}
