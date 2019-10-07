import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AsmCardModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { CardsComponent } from 'app/modules/admin/ui/cards/cards.component';
import { cardsRoutes } from 'app/modules/admin/ui/cards/cards.routing';

@NgModule({
    declarations: [
        CardsComponent
    ],
    imports     : [
        RouterModule.forChild(cardsRoutes),
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        AsmCardModule,
        SharedModule
    ]
})
export class CardsModule
{
}
