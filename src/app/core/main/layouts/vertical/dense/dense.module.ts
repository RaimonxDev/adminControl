import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AsmNavigationModule } from '@assembly/navigation';
import { MessagesModule } from 'app/core/main/common/messages/messages.module';
import { NotificationsModule } from 'app/core/main/common/notifications/notifications.module';
import { SearchModule } from 'app/core/main/common/search/search.module';
import { ShortcutsModule } from 'app/core/main/common/shortcuts/shortcuts.module';
import { UserModule } from 'app/core/main/common/user/user.module';
import { SharedModule } from 'app/core/shared/shared.module';
import { DenseLayoutComponent } from 'app/core/main/layouts/vertical/dense/dense.component';

@NgModule({
    declarations: [
        DenseLayoutComponent
    ],
    imports     : [
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        AsmNavigationModule,
        MessagesModule,
        NotificationsModule,
        SearchModule,
        ShortcutsModule,
        UserModule,
        SharedModule
    ],
    exports     : [
        DenseLayoutComponent
    ]
})
export class DenseLayoutModule
{
}