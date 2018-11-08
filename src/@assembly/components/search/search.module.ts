import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { AsmSearchComponent } from '@assembly/components/search/search.component';
import { AsmSearchService } from '@assembly/components/search/search.service';

@NgModule({
    declarations: [
        AsmSearchComponent
    ],
    providers   : [
        AsmSearchService
    ],
    imports     : [
        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        AsmSearchComponent
    ]
})
export class AsmSearchModule
{
}
