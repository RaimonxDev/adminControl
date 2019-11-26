import { Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AsmDrawerService, AsmMediaWatcherService, AsmNavigationService, AsmNotification, AsmNotificationsService, AsmShortcut, AsmShortcutsService } from '@assembly';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector     : 'layout[type="classy"]',
    templateUrl  : './classy.component.html',
    styleUrls    : ['./classy.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ClassyLayoutComponent implements OnInit, OnDestroy
{
    isScreenSmall: boolean;
    searchResults: any[] | null;

    @HostBinding('class.fixed-header')
    fixedHeader: boolean;

    @HostBinding('class.fixed-footer')
    fixedFooter: boolean;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AsmDrawerService} _asmDrawerService
     * @param {AsmMediaWatcherService} _asmMediaWatcherService
     * @param {AsmNavigationService} _asmNavigationService
     * @param {AsmNotificationsService} _asmNotificationsService
     * @param {AsmShortcutsService} _asmShortcutsService
     * @param {AuthService} _authService
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _asmDrawerService: AsmDrawerService,
        private _asmMediaWatcherService: AsmMediaWatcherService,
        private _asmNavigationService: AsmNavigationService,
        private _asmNotificationsService: AsmNotificationsService,
        private _asmShortcutsService: AsmShortcutsService,
        private _authService: AuthService,
        private _httpClient: HttpClient
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.fixedHeader = false;
        this.fixedFooter = false;
        this.searchResults = null;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for current year
     */
    get currentYear(): number
    {
        return new Date().getFullYear();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Set the current navigation
        this._asmNavigationService.setCurrentNavigation('default');

        // Subscribe to media changes
        this._asmMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((matchingAliases) => {

                // Check if the breakpoint is 'lt-md'
                this.isScreenSmall = matchingAliases.includes('lt-md');
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
     * Logout
     */
    logout(): void
    {
        this._authService.logout();
    }

    /**
     * On all notifications marked as read
     */
    onNotificationsMarkedAllAsRead(): void
    {
        this._httpClient.post('api/notifications/mark-all-as-read', {})
            .subscribe(() => {

                // Mark all notifications as read
                this._asmNotificationsService.markAllAsRead();
            });
    }

    /**
     * On single notification item read status change
     *
     * @param notification
     */
    onNotificationItemReadStatusChange(notification: AsmNotification): void
    {
        this._httpClient.post('api/notifications/toggle-read-status', {notification})
            .subscribe(() => {

                // Toggle the notification's read status
                this._asmNotificationsService.toggleReadStatus(notification);
            });
    }

    /**
     * On single notification item removed
     *
     * @param notification
     */
    onNotificationItemRemoved(notification: AsmNotification): void
    {
        this._httpClient.delete('api/notifications', {params: {id: notification.id}})
            .subscribe(() => {

                // Remove the notification
                this._asmNotificationsService.delete(notification);
            });
    }

    /**
     * On search
     *
     * @param value
     */
    onSearch(value): void
    {
        this._httpClient.post('api/search', {query: value})
            .subscribe((response: any) => {
                this.searchResults = response.results;
            });
    }

    /**
     * On shortcut save
     *
     * @param shortcut
     */
    onShortcutSave(shortcut: AsmShortcut): void
    {
        // If the shortcut has an id, update it...
        if ( shortcut.id )
        {
            this._httpClient.patch<AsmShortcut>('api/shortcuts', {
                id: shortcut.id,
                shortcut
            }).subscribe((updatedShortcut) => {

                // Update the shortcut
                this._asmShortcutsService.update(updatedShortcut);
            });
        }
        // Otherwise create it..
        else
        {
            this._httpClient.put<AsmShortcut>('api/shortcuts', {shortcut})
                .subscribe((newShortcut) => {

                    // Create the shortcut
                    this._asmShortcutsService.create(newShortcut);
                });
        }
    }

    /**
     * On shortcut delete
     *
     * @param shortcut
     */
    onShortcutDelete(shortcut: AsmShortcut): void
    {
        this._httpClient.delete<AsmShortcut>('api/shortcuts', {params: {id: shortcut.id}})
            .subscribe((deletedShortcut) => {

                // Delete the shortcut
                this._asmShortcutsService.delete(deletedShortcut);
            });
    }

    /**
     * Toggle drawer
     *
     * @param key
     */
    toggleDrawer(key): void
    {
        // Get the drawer
        const drawer = this._asmDrawerService.get(key);

        if ( drawer )
        {
            // Toggle the opened status
            drawer.toggle();
        }
    }

    /**
     * Toggle navigation
     *
     * @param key
     */
    toggleNavigation(key): void
    {
        // Get the navigation
        const navigation = this._asmNavigationService.getComponent(key);

        if ( navigation )
        {
            // Toggle the opened status
            navigation.toggle();
        }
    }
}
