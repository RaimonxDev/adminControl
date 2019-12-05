import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AsmDrawerModule, AsmNavigationModule, AsmNotificationsModule, AsmSearchModule, AsmShortcutsModule, AsmThemeConfiguratorModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { ClassyVerticalLayoutComponent } from 'app/core/layouts/vertical/classy/classy.component';

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
        AsmNotificationsModule,
        AsmSearchModule,
        AsmShortcutsModule,
        AsmThemeConfiguratorModule,
        SharedModule
    ],
    exports     : [
        ClassyVerticalLayoutComponent
    ]
})
export class ClassyVerticalLayoutModule
{
}