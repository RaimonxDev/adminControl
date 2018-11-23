import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

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
        CommonModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule
    ],
    exports     : [
        AsmSearchComponent
    ]
})
export class AsmSearchModule
{
}
