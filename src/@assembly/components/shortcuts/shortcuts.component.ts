import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
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
    mode: 'view' | 'modify' | 'add' | 'edit';
    shortcuts: AsmShortcut[];
    shortcutForm: FormGroup;

    // Title
    @Input()
    title: string;

    // Subtitle
    @Input()
    subtitle: string;

    // On save
    @Output()
    readonly save: EventEmitter<AsmShortcut>;

    // On delete
    @Output()
    readonly delete: EventEmitter<AsmShortcut>;

    // Private
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
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.delete = new EventEmitter<AsmShortcut>();
        this.mode = 'view';
        this.save = new EventEmitter<AsmShortcut>();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Initialize the form
        this.shortcutForm = this._formBuilder.group({
            id         : [null],
            label      : ['', Validators.required],
            description: [''],
            icon       : ['', Validators.required],
            link       : ['', Validators.required]
        });

        // Get the shortcuts
        this._asmShortcutsService.shortcuts$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((shortcuts) => {

                // Load the shortcuts
                this.shortcuts = shortcuts;

                // Mark for check
                this._changeDetectorRef.markForCheck();
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

            // Make sure to start in 'view' mode
            this.mode = 'view';
        });
    }

    /**
     * Change the mode
     */
    changeMode(mode): void
    {
        // Change the mode
        this.mode = mode;
    }

    /**
     * Prepare for a new shortcut
     */
    newShortcut(): void
    {
        // Reset the form
        this.shortcutForm.reset();

        // Enter the add mode
        this.mode = 'add';
    }

    /**
     * Edit a shortcut
     */
    editShortcut(shortcut): void
    {
        // Reset the form with the shortcut
        this.shortcutForm.reset(shortcut);

        // Enter the edit mode
        this.mode = 'edit';
    }

    /**
     * Save shortcut
     */
    saveShortcut(): void
    {
        // Get the data from the form
        const shortcut = this.shortcutForm.value;

        // Trigger the save
        this.save.next(shortcut);

        // Go back the modify mode
        this.mode = 'modify';
    }

    /**
     * Delete shortcut
     */
    deleteShortcut(): void
    {
        // Get the data from the form
        const shortcut = this.shortcutForm.value;

        // Trigger the delete
        this.delete.next(shortcut);

        // Go back the modify mode
        this.mode = 'modify';
    }
}
