import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { MailboxService } from 'app/modules/apps/mailbox/mailbox.service';

@Component({
    selector     : 'mailbox-settings',
    templateUrl  : './settings.component.html',
    styleUrls    : ['./settings.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MailboxSettingsComponent implements OnInit, OnDestroy
{
    labels: any[];
    labelsForm: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {MailboxService} _mailboxService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _mailboxService: MailboxService,
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
        // Labels
        this._mailboxService.labels$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((labels) => {

                // Get the labels
                this.labels = labels;
            });

        // Create the labels form
        this.labelsForm = this._formBuilder.group({
            labels  : this._formBuilder.array([]),
            newLabel: this._formBuilder.group({
                title: ['', Validators.required],
                color: ['orange']
            })
        });

        // Labels
        this._mailboxService.labels$
            .pipe(take(1))
            .subscribe((labels) => {

                // Iterate through the labels
                labels.forEach((label) => {

                    // Create a label form group
                    const labelFormGroup = this._formBuilder.group({
                        id   : [label.id],
                        title: [label.title, Validators.required],
                        slug : [label.slug],
                        color: [label.color]
                    });

                    // Add the label form group to the labels form array
                    (<FormArray>this.labelsForm.get('labels')).push(labelFormGroup);
                });
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
     * Add a label
     */
    addLabel(): void
    {
        // Add label to the server
        this._mailboxService
            .addLabel(this.labelsForm.get('newLabel').value)
            .subscribe((addedLabel) => {

                // Push the new label to the labels form array
                (<FormArray>this.labelsForm.get('labels')).push(this._formBuilder.group({
                    id   : [addedLabel.id],
                    title: [addedLabel.title, Validators.required],
                    slug : [addedLabel.slug],
                    color: [addedLabel.color]
                }));

                // Reset the new label form
                this.labelsForm.get('newLabel.title').setValue('');
                this.labelsForm.get('newLabel').markAsPristine();
                this.labelsForm.get('newLabel').markAsUntouched();
            });
    }

    /**
     * Delete a label
     */
    deleteLabel(id): void
    {
        // Delete label on the server
        this._mailboxService
            .deleteLabel(id)
            .subscribe(() => {

                // Get the labels form array
                const labelsFormArray = <FormArray>this.labelsForm.get('labels');

                // Remove the label from the labels form array
                labelsFormArray.removeAt(labelsFormArray.value.findIndex((label) => label.id === id));
            });
    }

    /**
     * Update labels
     */
    updateLabels(): void
    {
        // Iterate through the labels form array controls
        (<FormArray>this.labelsForm.get('labels')).controls.forEach((labelFormGroup) => {

            // If the label has been edited...
            if ( labelFormGroup.dirty )
            {
                // Update the label on the server
                this._mailboxService.updateLabel(labelFormGroup.value.id, labelFormGroup.value)
                    .subscribe();
            }
        });

        // Reset the labels form array
        this.labelsForm.get('labels').markAsPristine();
        this.labelsForm.get('labels').markAsUntouched();
    }

    /**
     * Track by
     *
     * @param index
     * @param item
     */
    trackBy(index, item): any
    {
        return item.id;
    }
}
