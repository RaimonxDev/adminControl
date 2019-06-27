import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from 'app/shared/shared.module';
import { AssemblyHelperClassesComponent } from 'app/modules/admin/ui/helper-classes/assembly/assembly-helper-classes.component';
import { assemblyHelperClassesRoutes } from 'app/modules/admin/ui/helper-classes/assembly/assembly-helper-classes.routing';

@NgModule({
    declarations: [
        AssemblyHelperClassesComponent
    ],
    imports     : [
        RouterModule.forChild(assemblyHelperClassesRoutes),
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        SharedModule
    ]
})
export class AssemblyHelperClassesModule
{
}
