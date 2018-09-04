import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AsmSharedModule } from '@assembly/shared.module';

import { ContentComponent } from 'app/core/layout/classic/components/content/content.component';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports     : [
        RouterModule,

        AsmSharedModule
    ],
    exports     : [
        RouterModule,

        ContentComponent
    ]
})
export class ContentModule
{
}
