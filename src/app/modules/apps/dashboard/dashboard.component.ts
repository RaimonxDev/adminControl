import { Component } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

@Component({
    selector   : 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls  : ['./dashboard.component.scss']
})
export class DashboardComponent
{
    axios: AxiosInstance;

    notifications: any;

    constructor()
    {
        this.axios = axios;
    }

    getNotifications(): void
    {
        /*this.axios.get('api/notifications').then((data) => {
            console.log(data);
            this.notifications = data.data.notifications;
        });*/

        this.axios.get('api/notifications?sortBy=title').then((data) => {
            console.log(data);
            this.notifications = data.data.notifications;
        });
    }
}
