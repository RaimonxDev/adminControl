import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmMockApi } from '@mock-api/mock-api.interface';
import { AsmMockApiService } from '@mock-api/mock-api.service';
import { AsmMockApiUtils } from '@mock-api/mock-api.utils';
import { messages as messagesData } from '@mock-api/data/messages/data';

@Injectable({
    providedIn: 'root'
})
export class MessagesMockApi implements AsmMockApi
{
    // Private
    private _messages: any;

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
        this._messages = messagesData;
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
        // @ Messages - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/messages')
            .reply(() => {
                return [
                    200,
                    {
                        messages: _.cloneDeep(this._messages)
                    }
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Messages - PUT
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onPut('api/messages')
            .reply((request) => {

                // Get the message
                const newMessage = _.cloneDeep(request.body.message);

                // Generate a new GUID
                newMessage.id = AsmMockApiUtils.guid();

                // Unshift the new message
                this._messages.unshift(newMessage);

                return [
                    200,
                    newMessage
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Messages - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onPatch('api/messages')
            .reply((request) => {

                // Get the id and message
                const id = request.body.id;
                const message = _.cloneDeep(request.body.message);

                // Prepare the updated message
                let updatedMessage = null;

                // Find the message and update it
                this._messages.forEach((item, index, messages) => {

                    if ( item.id === id )
                    {
                        // Update the message
                        messages[index] = _.assign({}, messages[index], message);

                        // Store the updated message
                        updatedMessage = messages[index];
                    }
                });

                return [
                    200,
                    updatedMessage
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Messages - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onDelete('api/messages')
            .reply((request) => {

                // Get the id
                const id = request.params.get('id');

                // Prepare the deleted message
                let deletedMessage = null;

                // Find the message
                const index = this._messages.findIndex((item) => item.id === id);

                // Store the deleted message
                deletedMessage = _.cloneDeep(this._messages[index]);

                // Delete the message
                this._messages.splice(index, 1);

                return [
                    200,
                    deletedMessage
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Mark all as read - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/messages/mark-all-as-read')
            .reply(() => {

                // Go through all messages
                this._messages.forEach((item, index, messages) => {

                    // Mark it as read
                    messages[index].read = true;
                    messages[index].seen = true;
                });

                return [
                    200,
                    true
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Toggle read status - POST
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onPost('api/messages/toggle-read-status')
            .reply((request) => {

                // Get the message
                const message = _.cloneDeep(request.body.message);

                // Prepare the updated message
                let updatedMessage = null;

                // Find the message and update it
                this._messages.forEach((item, index, messages) => {

                    if ( item.id === message.id )
                    {
                        // Update the message
                        messages[index].read = message.read;

                        // Store the updated message
                        updatedMessage = messages[index];
                    }
                });

                return [
                    200,
                    updatedMessage
                ];
            });
    }
}
