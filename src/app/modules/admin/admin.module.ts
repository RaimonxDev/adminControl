import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { adminRoutes } from 'app/modules/admin/admin.routing';

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes),
        MarkdownModule.forRoot({})
    ]
})
export class AdminModule
{
}
