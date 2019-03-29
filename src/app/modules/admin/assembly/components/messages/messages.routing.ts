import { Route } from '@angular/router';
import { MessagesComponent } from 'app/modules/admin/assembly/components/messages/messages.component';

export const messagesRoutes: Route[] = [
    {
        path     : '',
        component: MessagesComponent
    }
];
