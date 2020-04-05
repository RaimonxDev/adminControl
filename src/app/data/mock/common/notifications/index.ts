import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmMockApi } from '@assembly/lib/mock-api/mock-api.interfaces';
import { AsmMockApiService } from '@assembly/lib/mock-api/mock-api.service';
import { AsmMockApiUtils } from '@assembly/lib/mock-api/mock-api.utils';
import { notifications as notificationsData } from 'app/data/mock/common/notifications/data';

@Injectable({
    providedIn: 'root'
})
export class NotificationsMockApi implements AsmMockApi
{
    // Private
    private _notifications: any;

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
        this._notifications = notificationsData;

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
        // @ Notifications - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/common/notifications')
            .reply(() => {
                return [
                    200,
                    {
                        notifications: _.cloneDeep(this._notifications)
                    }
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Notifications - PUT
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onPut('api/common/notifications')
            .reply((request) => {

                // Get the notification
                const newNotification = _.cloneDeep(request.body.notification);

                // Generate a new GUID
                newNotification.id = AsmMockApiUtils.guid();

                // Unshift the new notification
                this._notifications.unshift(newNotification);

                return [
                    200,
                    newNotification
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Notifications - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onPatch('api/common/notifications')
            .reply((request) => {

                // Get the id and notification
                const id = request.body.id;
                const notification = _.cloneDeep(request.body.notification);

                // Prepare the updated notification
                let updatedNotification = null;

                // Find the notification and update it
                this._notifications.forEach((item, index, notifications) => {

                    if ( item.id === id )
                    {
                        // Update the notification
                        notifications[index] = _.assign({}, notifications[index], notification);

                        // Store the updated notification
                        updatedNotification = notifications[index];
                    }
                });

                return [
                    200,
                    updatedNotification
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Notifications - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onDelete('api/common/notifications')
            .reply((request) => {

                // Get the id
                const id = request.params.get('id');

                // Prepare the deleted notification
                let deletedNotification = null;

                // Find the notification
                const index = this._notifications.findIndex((item) => item.id === id);

                // Store the deleted notification
                deletedNotification = _.cloneDeep(this._notifications[index]);

                // Delete the notification
                this._notifications.splice(index, 1);

                return [
                    200,
                    deletedNotification
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Mark all as read - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/common/notifications/mark-all-as-read')
            .reply(() => {

                // Go through all notifications
                this._notifications.forEach((item, index, notifications) => {

                    // Mark it as read
                    notifications[index].read = true;
                    notifications[index].seen = true;
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
            .onPost('api/common/notifications/toggle-read-status')
            .reply((request) => {

                // Get the notification
                const notification = _.cloneDeep(request.body.notification);

                // Prepare the updated notification
                let updatedNotification = null;

                // Find the notification and update it
                this._notifications.forEach((item, index, notifications) => {

                    if ( item.id === notification.id )
                    {
                        // Update the notification
                        notifications[index].read = notification.read;

                        // Store the updated notification
                        updatedNotification = notifications[index];
                    }
                });

                return [
                    200,
                    updatedNotification
                ];
            });
    }
}
