import { NgModule } from '@angular/core';

import { AsmSharedModule } from '@assembly/shared.module';

import { NavigationComponent } from 'app/core/layout/classic/components/navigation/navigation.component';

@NgModule({
    declarations: [
        NavigationComponent
    ],
    imports     : [
        AsmSharedModule
    ],
    exports     : [
        NavigationComponent
    ]
})
export class NavigationModule
{
}
