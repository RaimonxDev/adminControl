import { Injectable } from '@angular/core';
import MockAdapter from 'axios-mock-adapter';
import { mockWithAuth } from 'app/core/mock-api/with-auth';

@Injectable({
    providedIn: 'root'
})
export class MockNotificationsData
{
    // Data
    private _notifications: { title: string; time: string; icon: string; read: boolean }[] = [
        {
            title: 'Your R&D submission has been accepted',
            time : 'Mon Oct 22 2018 12:21:20 GMT+0300 (GMT+03:00)',
            icon : 'check',
            read : false
        },
        {
            title: 'You have 5 unread mails',
            time : 'Mon Oct 22 2018 12:21:20 GMT+0300 (GMT+03:00)',
            icon : 'email',
            read : false
        },
        {
            title: 'Your docker container is ready to publish',
            time : 'Mon Oct 22 2018 12:21:20 GMT+0300 (GMT+03:00)',
            icon : 'layers',
            read : true
        }
    ];

    /**
     * constructor
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
        // GET
        mock.onGet('/api/notifications')
            .reply((config) => {
                return [
                    200,
                    {
                        notifications: this._notifications
                    }
                ];
            });

        // GET
        mock.onGet('/api/notifications?sortBy=title')
            /*.reply((config) => {

                console.log(config);

                this._notifications.sort((a, b) => a.title.localeCompare(b.title));

                return [
                    200,
                    {
                        notifications: this._notifications
                    }
                ];
            });*/
            .reply(mockWithAuth((config) => {

                console.log(config);

                this._notifications.sort((a, b) => a.title.localeCompare(b.title));

                return [
                    200,
                    {
                        notifications: this._notifications
                    }
                ];
            }));

        // GET
        mock.onGet('/api/notifications?filterBy=unread')
            .reply((config) => {

                const notifications = this._notifications.filter((notification) => {
                    return (notification.read === false);
                });

                return [
                    200,
                    {
                        notifications: notifications
                    }
                ];
            });
    }
}
