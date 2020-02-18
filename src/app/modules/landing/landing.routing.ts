import { Route } from '@angular/router';
import { MainComponent } from 'app/core/main/main.component';
import { LandingComponent } from 'app/modules/landing/landing.component';

// @formatter:off
// tslint:disable:max-line-length
export const landingRoutes: Route[] = [{
    path       : 'landing',
    component  : MainComponent,
    data: {
        layout: 'empty'
    },
    children   : [
        {
            path        : '',
            component: LandingComponent
        }
    ]
}];
