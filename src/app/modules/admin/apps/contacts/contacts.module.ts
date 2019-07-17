import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DATE_FORMATS, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MomentDateModule } from '@angular/material-moment-adapter';
import * as moment from 'moment';
import { AsmLookUpByPipeModule } from '@assembly';
import { SharedModule } from 'app/shared/shared.module';
import { contactsRoutes } from 'app/modules/admin/apps/contacts/contacts.routing';
import { ContactsComponent } from 'app/modules/admin/apps/contacts/contacts.component';
import { ContactsDetailsComponent } from 'app/modules/admin/apps/contacts/details/details.component';
import { ContactsListComponent } from 'app/modules/admin/apps/contacts/list/list.component';

export const CUSTOM_DATE_FORMAT = {
    parse  : {
        dateInput: moment.ISO_8601
    },
    display: {
        dateInput         : 'LL',
        monthYearLabel    : 'MMM YYYY',
        dateA11yLabel     : 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
    }
};

@NgModule({
    declarations: [
        ContactsComponent,
        ContactsListComponent,
        ContactsDetailsComponent
    ],
    imports     : [
        RouterModule.forChild(contactsRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatProgressBarModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatTableModule,
        MatTooltipModule,
        MomentDateModule,
        AsmLookUpByPipeModule,
        SharedModule
    ],
    providers   : [
        {
            provide : MAT_DATE_FORMATS,
            useValue: CUSTOM_DATE_FORMAT
        }
    ]
})
export class ContactsModule
{
}