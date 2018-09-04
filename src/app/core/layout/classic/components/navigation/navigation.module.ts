import { NgModule } from '@angular/core';

import { AsmSharedModule } from '@assembly/shared.module';
import { AsmMenuModule } from '@assembly/components/menu/menu.module';

import { NavigationComponent } from 'app/core/layout/classic/components/navigation/navigation.component';

@NgModule({
    declarations: [
        NavigationComponent
    ],
    imports     : [
        AsmSharedModule,

        AsmMenuModule
    ],
    exports     : [
        NavigationComponent
    ]
})
export class NavigationModule
{
}
