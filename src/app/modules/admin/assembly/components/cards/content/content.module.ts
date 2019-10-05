import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AsmCardModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { CardsContentComponent } from 'app/modules/admin/assembly/components/cards/content/content.component';
import { cardsContentRoutes } from 'app/modules/admin/assembly/components/cards/content/content.routing';

@NgModule({
    declarations: [
        CardsContentComponent
    ],
    imports     : [
        RouterModule.forChild(cardsContentRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        AsmCardModule,
        SharedModule
    ]
})
export class CardsContentModule
{
}
