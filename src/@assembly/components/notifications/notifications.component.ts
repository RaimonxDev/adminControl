import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { MatButton } from '@angular/material/button';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AsmAnimations } from '@assembly/animations/public-api';
import { AsmNotification } from '@assembly/components/notifications/notifications.type';
import { AsmNotificationsService } from '@assembly/components/notifications/notifications.service';

@Component({
    selector       : 'asm-notifications',
    templateUrl    : './notifications.component.html',
    styleUrls      : ['./notifications.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'asmNotifications',
    animations     : AsmAnimations
})
export class AsmNotificationsComponent implements OnInit, OnDestroy
{
    notifications: AsmNotification[];

    // On all notifications marked as read
    @Output()
    readonly markedAllAsRead: EventEmitter<AsmNotification[]>;

    // On single notification item changed
    @Output()
    readonly itemChange: EventEmitter<AsmNotification>;

    // On single notification item removed
    @Output()
    readonly itemRemoved: EventEmitter<AsmNotification>;

    // Private
    private _overlayRef: OverlayRef;
    private _unsubscribeAll: Subject<any>;

    @ViewChild('notificationsOrigin')
    private _notificationsOrigin: MatButton;

    @ViewChild('notificationsPanel')
    private _notificationsPanel: TemplateRef<any>;

    /**
     * Constructor
     *
     * @param {AsmNotificationsService} _asmNotificationsService
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {Overlay} _overlay
     * @param {ViewContainerRef} _viewContainerRef
     */
    constructor(
        private _asmNotificationsService: AsmNotificationsService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _overlay: Overlay,
        private _viewContainerRef: ViewContainerRef
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.markedAllAsRead = new EventEmitter<AsmNotification[]>();
        this.itemChange = new EventEmitter<AsmNotification>();
        this.itemRemoved = new EventEmitter<AsmNotification>();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Return the number of unread notifications
     */
    get unreadNotificationsCount(): number
    {
        if ( !this.notifications || !this.notifications.length )
        {
            return 0;
        }

        return this.notifications.filter((notification) => notification.read === false).length;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the notifications
        this._asmNotificationsService.notifications$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((notifications) => {

                // Load the notifications
                this.notifications = notifications;

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

    /**
     * Open the notifications panel
     */
    openPanel(): void
    {
        // Create the overlay
        this._overlayRef = this._overlay.create({
            hasBackdrop     : true,
            backdropClass   : '',
            scrollStrategy  : this._overlay.scrollStrategies.block(),
            positionStrategy: this._overlay.position()
                                  .flexibleConnectedTo(this._notificationsOrigin._elementRef.nativeElement)
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
        const templatePortal = new TemplatePortal(this._notificationsPanel, this._viewContainerRef);

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
        });
    }

    /**
     * Mark all notifications as read
     */
    markAllAsRead(): void
    {
        // Trigger the event
        this.markedAllAsRead.emit();
    }

    /**
     * Toggle read status of the given notification
     */
    toggleRead(notification): void
    {
        // Toggle the read status
        notification.read = !notification.read;

        // Trigger the event
        this.itemChange.emit(notification);
    }

    /**
     * Remove the given notification
     */
    removeNotification(notification): void
    {
        // Trigger the event
        this.itemRemoved.emit(notification);
    }
}
