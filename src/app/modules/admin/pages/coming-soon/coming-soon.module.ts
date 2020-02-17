import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AsmCardModule } from '@assembly/components/card';
import { AsmMessageModule } from '@assembly/components/message';
import { AsmSpinnerModule } from '@assembly/components/spinner';
import { SharedModule } from 'app/core/shared/shared.module';
import { ComingSoonComponent } from 'app/modules/admin/pages/coming-soon/coming-soon.component';
import { comingSoonRoutes } from 'app/modules/admin/pages/coming-soon/coming-soon.routing';

@NgModule({
    declarations: [
        ComingSoonComponent
    ],
    imports     : [
        RouterModule.forChild(comingSoonRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        AsmCardModule,
        AsmMessageModule,
        AsmSpinnerModule,
        SharedModule
    ]
})
export class ComingSoonModule
{
}
