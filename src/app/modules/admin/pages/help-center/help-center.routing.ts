import { Route } from '@angular/router';
import { HelpCenterComponent } from 'app/modules/admin/pages/help-center/help-center.component';
import { HelpCenterFaqsComponent } from 'app/modules/admin/pages/help-center/faqs/faqs.component';
import { HelpCenterGuidesComponent } from 'app/modules/admin/pages/help-center/guides/guides.component';
import { HelpCenterGuidesCategoryComponent } from 'app/modules/admin/pages/help-center/guides/category/category.component';
import { HelpCenterGuidesGuideComponent } from 'app/modules/admin/pages/help-center/guides/guide/guide.component';
import { HelpCenterSupportComponent } from 'app/modules/admin/pages/help-center/support/support.component';
import { HelpCenterFaqsResolver, HelpCenterGuidesCategoryResolver, HelpCenterGuidesGuideResolver, HelpCenterGuidesResolver, HelpCenterMostAskedFaqsResolver } from 'app/modules/admin/pages/help-center/help-center.resolvers';

export const helpCenterRoutes: Route[] = [
    {
        path     : '',
        pathMatch: 'full',
        component: HelpCenterComponent,
        resolve  : {
            faqs: HelpCenterMostAskedFaqsResolver
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
        path    : 'guides',
        children: [
            {
                path     : '',
                pathMatch: 'full',
                component: HelpCenterGuidesComponent,
                resolve  : {
                    guides: HelpCenterGuidesResolver
                }
            },
            {
                path    : ':categorySlug',
                children: [
                    {
                        path     : '',
                        pathMatch: 'full',
                        component: HelpCenterGuidesCategoryComponent,
                        resolve  : {
                            guides: HelpCenterGuidesCategoryResolver
                        }
                    },
                    {
                        path     : ':guideSlug',
                        component: HelpCenterGuidesGuideComponent,
                        resolve  : {
                            guide: HelpCenterGuidesGuideResolver
                        }
                    }
                ]
            }
        ]
    },
    {
        path     : 'support',
        component: HelpCenterSupportComponent
    }
];
