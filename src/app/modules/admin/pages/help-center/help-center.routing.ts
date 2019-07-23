import { Route } from '@angular/router';
import { HelpCenterFaqCategoriesResolver, HelpCenterFaqsResolver, HelpCenterHomeFaqsResolver } from 'app/modules/admin/pages/help-center/help-center.resolvers';
import { HelpCenterComponent } from 'app/modules/admin/pages/help-center/help-center.component';
import { HelpCenterHomeComponent } from 'app/modules/admin/pages/help-center/home/home.component';
import { HelpCenterFaqsComponent } from 'app/modules/admin/pages/help-center/faqs/faqs.component';
import { HelpCenterSupportComponent } from 'app/modules/admin/pages/help-center/support/support.component';

export const helpCenterRoutes: Route[] = [
    {
        path     : '',
        component: HelpCenterComponent,
        resolve  : {
            faqCategories: HelpCenterFaqCategoriesResolver
        },
        children : [
            {
                path     : '',
                component: HelpCenterHomeComponent,
                resolve  : {
                    homeFaqs: HelpCenterHomeFaqsResolver
                }
            },
            {
                path     : 'faqs',
                component: HelpCenterFaqsComponent,
                resolve  : {
                    faqs: HelpCenterFaqsResolver
                }
            },
            {
                path     : 'support',
                component: HelpCenterSupportComponent
            }
        ]
    }
];
