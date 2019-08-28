import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';

@Component({
    selector     : 'calendar-confirmation',
    templateUrl  : './confirmation.component.html',
    styleUrls    : ['./confirmation.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CalendarConfirmationComponent implements OnInit, OnDestroy
{
    confirmationForm: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {MatDialogRef} matDialogRef
     * @param {MAT_DIALOG_DATA} data
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public matDialogRef: MatDialogRef<CalendarConfirmationComponent>,
        private _formBuilder: FormBuilder
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Create the confirmation form
        this.confirmationForm = this._formBuilder.group({
            which: ['this-and-following']
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Done
     */
    done(): void
    {
        // Close the dialog
        this.matDialogRef.close(this.confirmationForm.get('which').value);
    }
}
