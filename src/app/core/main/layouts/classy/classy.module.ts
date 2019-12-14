import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AsmDrawerModule, AsmNavigationModule, AsmThemeConfiguratorModule } from '@assembly';
import { ClassyVerticalLayoutComponent } from 'app/core/main/layouts/classy/classy.component';
import { MessagesModule } from 'app/core/main/common/messages/messages.module';
import { NotificationsModule } from 'app/core/main/common/notifications/notifications.module';
import { SearchModule } from 'app/core/main/common/search/search.module';
import { ShortcutsModule } from 'app/core/main/common/shortcuts/shortcuts.module';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    declarations: [
        ClassyVerticalLayoutComponent
    ],
    imports     : [
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        AsmDrawerModule,
        AsmNavigationModule,
        AsmThemeConfiguratorModule,
        MessagesModule,
        NotificationsModule,
        SearchModule,
        ShortcutsModule,
        SharedModule
    ],
    exports     : [
        ClassyVerticalLayoutComponent
    ]
})
export class ClassyVerticalLayoutModule
{
}
