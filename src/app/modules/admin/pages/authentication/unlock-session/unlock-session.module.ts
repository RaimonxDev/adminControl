import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AsmCardModule } from '@assembly/card';
import { AsmMessageModule } from '@assembly/message';
import { AsmSpinnerModule } from '@assembly/spinner';
import { SharedModule } from 'app/core/shared/shared.module';
import { UnlockSessionComponent } from 'app/modules/admin/pages/authentication/unlock-session/unlock-session.component';
import { unlockSessionRoutes } from 'app/modules/admin/pages/authentication/unlock-session/unlock-session.routing';

@NgModule({
    declarations: [
        UnlockSessionComponent
    ],
    imports     : [
        RouterModule.forChild(unlockSessionRoutes),
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
export class UnlockSessionModule
{
}
