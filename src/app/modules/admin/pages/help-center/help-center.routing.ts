import { Route } from '@angular/router';
import { HelpCenterFaqsResolver, HelpCenterGuidesCategoryResolver, HelpCenterGuidesHomeResolver, HelpCenterHomeFaqsResolver } from 'app/modules/admin/pages/help-center/help-center.resolvers';
import { HelpCenterComponent } from 'app/modules/admin/pages/help-center/help-center.component';
import { HelpCenterHomeComponent } from 'app/modules/admin/pages/help-center/home/home.component';
import { HelpCenterFaqsComponent } from 'app/modules/admin/pages/help-center/faqs/faqs.component';
import { HelpCenterGuidesComponent } from 'app/modules/admin/pages/help-center/guides/guides.component';
import { HelpCenterGuidesHomeComponent } from 'app/modules/admin/pages/help-center/guides/home/home.component';
import { HelpCenterGuidesCategoryComponent } from 'app/modules/admin/pages/help-center/guides/category/category.component';
import { HelpCenterSupportComponent } from 'app/modules/admin/pages/help-center/support/support.component';

export const helpCenterRoutes: Route[] = [
    {
        path     : '',
        component: HelpCenterComponent,
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
                path     : 'guides',
                component: HelpCenterGuidesComponent,
                children : [
                    {
                        path     : '',
                        component: HelpCenterGuidesHomeComponent,
                        resolve  : {
                            guides: HelpCenterGuidesHomeResolver
                        }
                    },
                    {
                        path     : ':categorySlug',
                        component: HelpCenterGuidesCategoryComponent,
                        resolve  : {
                            guides: HelpCenterGuidesCategoryResolver
                        }
                    }
                ]
            },
            {
                path     : 'support',
                component: HelpCenterSupportComponent
            }
        ]
    }
];
