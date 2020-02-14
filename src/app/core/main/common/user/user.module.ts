import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { UserComponent } from 'app/core/main/common/user/user.component';
import { SharedModule } from 'app/core/shared/shared.module';

@NgModule({
    declarations: [
        UserComponent
    ],
    imports     : [
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        SharedModule
    ],
    exports     : [
        UserComponent
    ]
})
export class UserModule
{
}
