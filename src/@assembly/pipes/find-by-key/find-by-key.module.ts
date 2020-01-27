import { NgModule } from '@angular/core';
import { FindByKeyPipe } from '@assembly/pipes/find-by-key/find-by-key.pipe';

@NgModule({
    declarations: [
        FindByKeyPipe
    ],
    exports     : [
        FindByKeyPipe
    ]
})
export class AsmFindByKeyPipeModule
{
}
