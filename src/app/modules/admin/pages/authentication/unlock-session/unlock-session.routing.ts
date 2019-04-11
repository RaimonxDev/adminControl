import { Route } from '@angular/router';
import { UnlockSessionComponent } from 'app/modules/admin/pages/authentication/unlock-session/unlock-session.component';

export const unlockSessionRoutes: Route[] = [
    {
        path     : '',
        component: UnlockSessionComponent
    }
];
