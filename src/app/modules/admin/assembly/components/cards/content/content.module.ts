import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
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
        MatIconModule,
        AsmCardModule,
        SharedModule
    ]
})
export class CardsContentModule
{
}
