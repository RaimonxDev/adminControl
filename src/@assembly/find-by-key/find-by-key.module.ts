import { NgModule } from '@angular/core';
import { AsmFindByKeyPipe } from '@assembly/find-by-key/find-by-key.pipe';

@NgModule({
    declarations: [
        AsmFindByKeyPipe
    ],
    exports     : [
        AsmFindByKeyPipe
    ]
})
export class AsmFindByKeyPipeModule
{
}
