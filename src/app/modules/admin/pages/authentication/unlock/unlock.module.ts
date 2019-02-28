import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { AsmMessageModule, AsmSpinnerModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { UnlockComponent } from 'app/modules/admin/pages/authentication/unlock/unlock.component';

const routes: Route[] = [
    {
        path     : '',
        component: UnlockComponent
    }
];

@NgModule({
    declarations: [
        UnlockComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        AsmMessageModule,
        AsmSpinnerModule,
        SharedModule
    ]
})
export class UnlockModule
{
}