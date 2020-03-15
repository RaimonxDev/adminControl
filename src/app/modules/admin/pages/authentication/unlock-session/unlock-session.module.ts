import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsmCardModule } from '@assembly/components/card';
import { AsmMessageModule } from '@assembly/components/message';
import { SharedModule } from 'app/shared/shared.module';
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
        MatProgressSpinnerModule,
        AsmCardModule,
        AsmMessageModule,
        SharedModule
    ]
})
export class UnlockSessionModule
{
}
