import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AsmAnimations } from '@assembly/animations/public-api';

import { AsmShortcut } from '@assembly/components/shortcuts/shortcut.type';
import { AsmShortcutsService } from '@assembly/components/shortcuts/shortcuts.service';

@Component({
    selector       : 'asm-shortcuts',
    templateUrl    : './shortcuts.component.html',
    styleUrls      : ['./shortcuts.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'asmShortcuts',
    animations     : AsmAnimations
})
export class AsmShortcutsComponent implements OnInit, OnDestroy
{
    shortcuts: AsmShortcut[];
    form: FormGroup;

    // Title
    @Input()
    title: string;

    // Subtitle
    @Input()
    subtitle: string;

    // Add shortcut label
    @Input()
    addShortcutLabel: string;

    // Private
    private _editMode: boolean;
    private _formMode: boolean;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AsmShortcutsService} _asmShortcutsService
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _asmShortcutsService: AsmShortcutsService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _formBuilder: FormBuilder
    )
    {
        // Set the private defaults
        this._editMode = false;
        this._formMode = false;
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for edit mode
     */
    get editMode(): boolean
    {
        return this._editMode;
    }

    /**
     * Getter for form mode
     */
    get formMode(): boolean
    {
        return this._formMode;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to shortcuts service
        this._asmShortcutsService.onStored
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((shortcuts) => {

                // Load the shortcuts
                this.shortcuts = shortcuts;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Initialize the form
        this.form = this._formBuilder.group({
            label      : ['', Validators.required],
            icon       : ['', Validators.required],
            iconFontSet: [''],
            iconClasses: [''],
            link       : ['', Validators.required]
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
     * Toggle edit mode
     */
    toggleEditMode(): void
    {
        this._editMode = !this.editMode;

        // Turning off the edit mode also
        // turns off the form mode
        if ( !this._editMode )
        {
            this._formMode = false;
        }
    }

    /**
     * Toggle the form mode
     */
    toggleFormMode(): void
    {
        this._formMode = !this._formMode;
    }

    /**
     * Save the shortcut
     */
    save(): void
    {

    }
}
