import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PopulateService } from 'app/core/populate/populate.service';

@NgModule({
    providers: [
        PopulateService
    ],
    imports  : [
        HttpClientModule
    ]
})
export class PopulateModule
{
}
