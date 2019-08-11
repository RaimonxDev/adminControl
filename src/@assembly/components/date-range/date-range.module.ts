import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { AsmDateRangeComponent } from '@assembly/components/date-range/date-range.component';

@NgModule({
    declarations: [
        AsmDateRangeComponent
    ],
    imports: [
        MatButtonModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatMomentDateModule,
        CommonModule,
    ],
    exports     : [
        AsmDateRangeComponent
    ]
})
export class AsmDateRangeModule
{
}
