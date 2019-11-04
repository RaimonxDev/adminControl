import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { MatButton } from '@angular/material/button';
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
    shortcutForm: FormGroup;

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
    private _overlayRef: OverlayRef;
    private _unsubscribeAll: Subject<any>;

    @ViewChild('shortcutsOrigin')
    private _shortcutsOrigin: MatButton;

    @ViewChild('shortcutsPanel')
    private _shortcutsPanel: TemplateRef<any>;

    /**
     * Constructor
     *
     * @param {AsmShortcutsService} _asmShortcutsService
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {FormBuilder} _formBuilder
     * @param {Overlay} _overlay
     * @param {ViewContainerRef} _viewContainerRef
     */
    constructor(
        private _asmShortcutsService: AsmShortcutsService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _formBuilder: FormBuilder,
        private _overlay: Overlay,
        private _viewContainerRef: ViewContainerRef
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
        this.shortcutForm = this._formBuilder.group({
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

        // Dispose the overlay if it's still on the DOM
        if ( this._overlayRef )
        {
            this._overlayRef.dispose();
        }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    openPanel(): void
    {
        // Create the overlay
        this._overlayRef = this._overlay.create({
            hasBackdrop     : true,
            scrollStrategy  : this._overlay.scrollStrategies.block(),
            positionStrategy: this._overlay.position()
                                  .flexibleConnectedTo(this._shortcutsOrigin._elementRef.nativeElement)
                                  .withFlexibleDimensions()
                                  .withViewportMargin(64)
                                  .withLockedPosition()
                                  .withPositions([
                                      {
                                          originX : 'start',
                                          originY : 'bottom',
                                          overlayX: 'start',
                                          overlayY: 'top'
                                      },
                                      {
                                          originX : 'start',
                                          originY : 'top',
                                          overlayX: 'start',
                                          overlayY: 'bottom'
                                      },
                                      {
                                          originX : 'end',
                                          originY : 'bottom',
                                          overlayX: 'end',
                                          overlayY: 'top'
                                      },
                                      {
                                          originX : 'end',
                                          originY : 'top',
                                          overlayX: 'end',
                                          overlayY: 'bottom'
                                      }
                                  ])
        });

        // Create a portal from the template
        const templatePortal = new TemplatePortal(this._shortcutsPanel, this._viewContainerRef);

        // Attach the portal to the overlay
        this._overlayRef.attach(templatePortal);

        // Subscribe to the backdrop click
        this._overlayRef.backdropClick().subscribe(() => {

            // If overlay exists and attached...
            if ( this._overlayRef && this._overlayRef.hasAttached() )
            {
                // Detach it
                this._overlayRef.detach();
            }

            // If template portal exists and attached...
            if ( templatePortal && templatePortal.isAttached )
            {
                // Detach it
                templatePortal.detach();
            }

            // Toggle off the the edit and form mode
            this._editMode = false;
            this._formMode = false;
        });
    }

    /**
     * Toggle edit mode
     */
    toggleEditMode(): void
    {
        this._editMode = !this._editMode;

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
