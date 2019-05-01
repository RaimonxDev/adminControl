import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AsmCardModule, AsmMessageModule, AsmSpinnerModule } from '@assembly';
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
        MatSelectModule,
        AsmCardModule,
        AsmMessageModule,
        AsmSpinnerModule,
        SharedModule
    ]
})
export class UnlockSessionModule
{
}
