import { NgModule } from '@angular/core';

import { AsmSharedModule } from '@assembly/shared.module';

import { FooterComponent } from 'app/core/layout/classic/components/footer/footer.component';

@NgModule({
    declarations: [
        FooterComponent
    ],
    imports     : [
        AsmSharedModule,
    ],
    exports     : [
        FooterComponent
    ]
})
export class FooterModule
{
}
