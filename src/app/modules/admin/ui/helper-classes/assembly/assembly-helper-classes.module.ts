import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSelectModule } from '@angular/material/select';
import { AsmCardModule, AsmHighlightModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { AssemblyHelperClassesComponent } from 'app/modules/admin/ui/helper-classes/assembly/assembly-helper-classes.component';
import { assemblyHelperClassesRoutes } from 'app/modules/admin/ui/helper-classes/assembly/assembly-helper-classes.routing';

@NgModule({
    declarations: [
        AssemblyHelperClassesComponent
    ],
    imports     : [
        RouterModule.forChild(assemblyHelperClassesRoutes),
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatMomentDateModule,
        MatSelectModule,
        AsmCardModule,
        AsmHighlightModule,
        SharedModule
    ]
})
export class AssemblyHelperClassesModule
{
}
