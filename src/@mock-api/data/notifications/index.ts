import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmMockApiService } from '@mock-api/mock-api.service';
import { notifications as notificationsData } from '@mock-api/data/notifications/data';

@Injectable({
    providedIn: 'root'
})
export class MockNotificationsApi
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
        // @ Notifications - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/notifications')
            .reply(() => {
                return [
                    200,
                    {
                        notifications: _.cloneDeep(this._notifications)
                    }
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Notifications - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onDelete('api/notifications')
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
        // @ Mark all as read - POST
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onPost('api/notifications/mark-all-as-read')
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
            .onPost('api/notifications/toggle-read-status')
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
