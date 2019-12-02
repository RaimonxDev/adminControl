import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { AdminResolver } from 'app/modules/admin/admin.resolvers';
import { MainComponent } from 'app/core/main/main.component';

// @formatter:off
// tslint:disable:max-line-length
export const adminRoutes: Route[] = [{
    path       : '',
    component  : MainComponent,
    data       : {
        layout: 'classy-vertical'
    },
    canActivate: [AuthGuard],
    resolve    : {
        admin: AdminResolver,
    },
    children   : [

        // Redirect / to /apps/dashboard
        {path: '', pathMatch : 'full', redirectTo: 'apps/dashboard'},

        // Apps
        {path: 'apps', children: [

            {path: 'dashboard', loadChildren: () => import('./apps/dashboard/dashboard.module').then(m => m.DashboardModule)},
            {path: 'calendar', loadChildren: () => import('./apps/calendar/calendar.module').then(m => m.CalendarModule)},
            {path: 'mailbox', loadChildren: () => import('./apps/mailbox/mailbox.module').then(m => m.MailboxModule)},
            {path: 'tasks', loadChildren: () => import('./apps/tasks/tasks.module').then(m => m.TasksModule)},
            {path: 'contacts', loadChildren: () => import('./apps/contacts/contacts.module').then(m => m.ContactsModule)}
        ]},

        // Pages
        {path: 'pages', children: [

            // Authentication
            {path: 'authentication', children: [

                {path: 'confirmation-required', loadChildren: () => import('./pages/authentication/confirmation-required/confirmation-required.module').then(m => m.ConfirmationRequiredModule)},
                {path: 'forgot-password', loadChildren: () => import('./pages/authentication/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)},
                {path: 'login', loadChildren: () => import('./pages/authentication/login/login.module').then(m => m.LoginModule)},
                {path: 'logout', loadChildren: () => import('./pages/authentication/logout/logout.module').then(m => m.LogoutModule)},
                {path: 'reset-password', loadChildren: () => import('./pages/authentication/reset-password/reset-password.module').then(m => m.ResetPasswordModule)},
                {path: 'signup', loadChildren: () => import('./pages/authentication/signup/signup.module').then(m => m.SignupModule)},
                {path: 'unlock-session', loadChildren: () => import('./pages/authentication/unlock-session/unlock-session.module').then(m => m.UnlockSessionModule)}
            ]},

            // Coming soon
            {path: 'coming-soon', loadChildren: () => import('./pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule)},

            // Errors
            {path: 'errors', children: [
                {path: '404', loadChildren: () => import('./pages/errors/error-404/error-404.module').then(m => m.Error404Module)},
                {path: '500', loadChildren: () => import('./pages/errors/error-500/error-500.module').then(m => m.Error500Module)}
            ]},

            // Help center
            {path: 'help-center', loadChildren: () => import('./pages/help-center/help-center.module').then(m => m.HelpCenterModule)},

            // Maintenance
            {path: 'maintenance', loadChildren: () => import('./pages/maintenance/maintenance.module').then(m => m.MaintenanceModule)},

            // Pricing
            {path: 'pricing', children: [
                {path: 'modern', loadChildren: () => import('./pages/pricing/modern/modern.module').then(m => m.PricingModernModule)},
                {path: 'simple', loadChildren: () => import('./pages/pricing/simple/simple.module').then(m => m.PricingSimpleModule)},
                {path: 'single', loadChildren: () => import('./pages/pricing/single/single.module').then(m => m.PricingSingleModule)},
                {path: 'table', loadChildren: () => import('./pages/pricing/table/table.module').then(m => m.PricingTableModule)}
            ]},

            // Profile
            {path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)},
        ]},

        // User interface
        {path: 'ui', children: [

            // Material components
            {path: 'material-components', loadChildren: () => import('./ui/material-components/material-components.module').then(m => m.MaterialComponentsModule)},

            // Cards
            {path: 'cards', loadChildren: () => import('app/modules/admin/ui/cards/cards.module').then(m => m.CardsModule)},

            // Colors
            {path: 'colors', loadChildren: () => import('./ui/colors/colors.module').then(m => m.ColorsModule)},

            // Content layouts
            {path: 'content-layouts', children: [

                // Overview
                {path: 'overview', loadChildren: () => import('./ui/content-layouts/overview/overview.module').then(m => m.ContentLayoutsModule)},

                // Fullwidth
                {path: 'fullwidth', children: [

                    {path: 'basic', loadChildren: () => import('./ui/content-layouts/fullwidth/basic/basic.module').then(m => m.FullwidthBasicModule)},
                    {path: 'standard', loadChildren: () => import('./ui/content-layouts/fullwidth/standard/standard.module').then(m => m.FullwidthStandardModule)},
                    {path: 'tabs', loadChildren: () => import('./ui/content-layouts/fullwidth/tabs/tabs.module').then(m => m.FullwidthTabsModule)},
                    {path: 'tabs-navigation', loadChildren: () => import('./ui/content-layouts/fullwidth/tabs-navigation/tabs-navigation.module').then(m => m.FullwidthTabsNavigationModule)}
                ]},

                // Left sidebar
                {path: 'left-sidebar', children: [

                    {path: 'fullheight', children: [

                        {path: 'basic', loadChildren: () => import('./ui/content-layouts/left-sidebar/fullheight/basic/basic.module').then(m => m.LeftSidebarFullheightBasicModule)},
                        {path: 'standard', loadChildren: () => import('./ui/content-layouts/left-sidebar/fullheight/standard/standard.module').then(m => m.LeftSidebarFullheightStandardModule)},
                        {path: 'tabs', loadChildren: () => import('./ui/content-layouts/left-sidebar/fullheight/tabs/tabs.module').then(m => m.LeftSidebarFullheightTabsModule)},
                        {path: 'tabs-navigation', loadChildren: () => import('./ui/content-layouts/left-sidebar/fullheight/tabs-navigation/tabs-navigation.module').then(m => m.LeftSidebarFullheightTabsNavigationModule)}
                    ]},

                    {path: 'content', children: [

                        {path: 'standard', loadChildren: () => import('./ui/content-layouts/left-sidebar/content/standard/standard.module').then(m => m.LeftSidebarContentStandardModule)},
                        {path: 'tabs', loadChildren: () => import('./ui/content-layouts/left-sidebar/content/tabs/tabs.module').then(m => m.LeftSidebarContentTabsModule)},
                        {path: 'tabs-navigation', loadChildren: () => import('./ui/content-layouts/left-sidebar/content/tabs-navigation/tabs-navigation.module').then(m => m.LeftSidebarContentTabsNavigationModule)}
                    ]}
                ]},

                // Right sidebar
                {path: 'right-sidebar', children: [

                    {path: 'fullheight', children: [

                        {path: 'basic', loadChildren: () => import('./ui/content-layouts/right-sidebar/fullheight/basic/basic.module').then(m => m.RightSidebarFullheightBasicModule)},
                        {path: 'standard', loadChildren: () => import('./ui/content-layouts/right-sidebar/fullheight/standard/standard.module').then(m => m.RightSidebarFullheightStandardModule)},
                        {path: 'tabs', loadChildren: () => import('./ui/content-layouts/right-sidebar/fullheight/tabs/tabs.module').then(m => m.RightSidebarFullheightTabsModule)},
                        {path: 'tabs-navigation', loadChildren: () => import('./ui/content-layouts/right-sidebar/fullheight/tabs-navigation/tabs-navigation.module').then(m => m.RightSidebarFullheightTabsNavigationModule)}
                    ]},

                    {path: 'content', children: [

                        {path: 'standard', loadChildren: () => import('./ui/content-layouts/right-sidebar/content/standard/standard.module').then(m => m.RightSidebarContentStandardModule)},
                        {path: 'tabs', loadChildren: () => import('./ui/content-layouts/right-sidebar/content/tabs/tabs.module').then(m => m.RightSidebarContentTabsModule)},
                        {path: 'tabs-navigation', loadChildren: () => import('./ui/content-layouts/right-sidebar/content/tabs-navigation/tabs-navigation.module').then(m => m.RightSidebarContentTabsNavigationModule)}
                    ]}
                ]}
            ]},

            // Forms
            {path: 'forms', children: [
                {path: 'fields', loadChildren: () => import('./ui/forms/fields/fields.module').then(m => m.FormsFieldsModule)},
                {path: 'layouts', loadChildren: () => import('./ui/forms/layouts/layouts.module').then(m => m.FormsLayoutsModule)},
                {path: 'wizards', loadChildren: () => import('./ui/forms/wizards/wizards.module').then(m => m.FormsWizardsModule)}
            ]},

            // Helpers
            {path: 'helpers', children: [
                {path: 'assembly', loadChildren: () => import('app/modules/admin/ui/helpers/assembly/assembly.module').then(m => m.AssemblyHelpersModule)},
                {path: 'tailwindcss', loadChildren: () => import('app/modules/admin/ui/helpers/tailwind/tailwind.module').then(m => m.TailwindModule)}
            ]},

            // Icons
            {path: 'icons', loadChildren: () => import('./ui/icons/icons.module').then(m => m.IconsModule)}
        ]},

        // Assembly
        {path: 'assembly', children: [

            // Components
            {path: 'components', children: [
                {path: 'animations', loadChildren: () => import('./assembly/components/animations/animations.module').then(m => m.AnimationsModule)},
                {path: 'messages', loadChildren: () => import('./assembly/components/messages/messages.module').then(m => m.MessagesModule)},
                {path: 'navigation', loadChildren: () => import('./assembly/components/navigation/navigation.module').then(m => m.NavigationModule)}
            ]}
        ]},

        // Docs
        {path: 'docs', loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule)},

        // 404
        {path: '404-not-found', pathMatch: 'full', loadChildren: () => import('./pages/errors/error-404/error-404.module').then(m => m.Error404Module)},

        // Catch all
        {path: '**', redirectTo: '404-not-found'}
    ]
}];
