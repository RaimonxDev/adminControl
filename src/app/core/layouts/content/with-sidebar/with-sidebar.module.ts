import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';

import { ContentLayoutWithSidebarComponent } from 'app/core/layouts/content/with-sidebar/with-sidebar.component';

@NgModule({
    declarations: [
        ContentLayoutWithSidebarComponent
    ],
    imports     : [
        MatSidenavModule
    ],
    exports     : [
        ContentLayoutWithSidebarComponent
    ]
})
export class ContentLayoutWithSidebarModule
{
}
