import { NgModule } from '@angular/core';

import { AuthModule } from 'app/core/auth/auth.module';
import { LayoutsModule } from 'app/core/layouts/layouts.module';
import { MockApiModule } from 'app/core/mock-api/mock-api.module';

@NgModule({
    imports: [
        AuthModule,
        LayoutsModule,
        MockApiModule
    ],
    exports: [
        LayoutsModule
    ]
})
export class CoreModule
{
}
