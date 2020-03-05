import { Route } from '@angular/router';
import { EmptyLayoutComponent } from 'app/layout/layouts/empty/empty.component';
import { LandingComponent } from 'app/modules/landing/landing.component';

// @formatter:off
// tslint:disable:max-line-length
export const landingRoutes: Route[] = [{
    path       : 'landing',
    component  : EmptyLayoutComponent,
    children   : [
        {
            path        : '',
            component: LandingComponent
        }
    ]
}];
