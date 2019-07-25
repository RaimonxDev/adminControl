import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AsmMessageModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { helpCenterRoutes } from 'app/modules/admin/pages/help-center/help-center.routing';
import { HelpCenterComponent } from 'app/modules/admin/pages/help-center/help-center.component';
import { HelpCenterHomeComponent } from 'app/modules/admin/pages/help-center/home/home.component';
import { HelpCenterFaqsComponent } from 'app/modules/admin/pages/help-center/faqs/faqs.component';
import { HelpCenterGuidesComponent } from 'app/modules/admin/pages/help-center/guides/guides.component';
import { HelpCenterGuidesHomeComponent } from 'app/modules/admin/pages/help-center/guides/home/home.component';
import { HelpCenterGuidesCategoryComponent } from 'app/modules/admin/pages/help-center/guides/category/category.component';
import { HelpCenterSupportComponent } from 'app/modules/admin/pages/help-center/support/support.component';

@NgModule({
    declarations: [
        HelpCenterComponent,
        HelpCenterHomeComponent,
        HelpCenterFaqsComponent,
        HelpCenterGuidesComponent,
        HelpCenterGuidesHomeComponent,
        HelpCenterGuidesCategoryComponent,
        HelpCenterSupportComponent
    ],
    imports     : [
        RouterModule.forChild(helpCenterRoutes),
        MatButtonModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        AsmMessageModule,
        SharedModule
    ]
})
export class HelpCenterModule
{
}
