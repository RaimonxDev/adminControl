import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AsmNotification } from '@assembly/components/notifications/notifications.type';
import { filter, map, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AsmNotificationsService
{
    // Private
    private _notifications: BehaviorSubject<AsmNotification[]>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the private defaults
        this._notifications = new BehaviorSubject([]);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for notifications
     */
    get notifications$(): Observable<AsmNotification[]>
    {
        return this._notifications.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Bulk load notifications
     *
     * @param notifications
     */
    load(notifications: AsmNotification[]): Observable<AsmNotification[]>
    {
        // Load the notifications
        this._notifications.next(notifications);

        // Return the notifications
        return this.notifications$;
    }

    /**
     * Push single notification into notifications array
     *
     * @param notification
     */
    push(notification: AsmNotification): void
    {
        // Get the current notifications array
        const currentNotifications = this._notifications.value;

        // Push the notification
        currentNotifications.push(notification);

        // Execute the observable
        this._notifications.next(currentNotifications);
    }

    /**
     * Mark all unread notifications as read
     */
    markAllAsRead(): void
    {
        this.notifications$
            .pipe(
                take(1),
                map((notifications) => {

                    // Go through all notifications and mark all of them as read
                    notifications.forEach((notification, index) => {
                        notifications[index].read = true;
                    });

                    // Update the notifications
                    this._notifications.next(notifications);
                })
            ).subscribe();
    }

    /**
     * Toggle the read status of the given notification
     *
     * @param notification
     */
    toggleReadStatus(notification: AsmNotification): void
    {
        this.notifications$
            .pipe(
                take(1),
                map((notifications) => {

                    // Find the index of the given notification
                    const index = notifications.findIndex(item => item.id === notification.id);

                    // Mark as read
                    notifications[index].read = notification.read;

                    // Update the notifications
                    this._notifications.next(notifications);
                })
            ).subscribe();
    }

    /**
     * Delete the given notification
     *
     * @param deletedNotification
     */
    delete(deletedNotification: AsmNotification): void
    {
        this.notifications$
            .pipe(
                take(1),
                map((notifications) => {

                    // Find the index of the deleted notification
                    const index = notifications.findIndex(item => item.id === deletedNotification.id);

                    // Delete the notification
                    notifications.splice(index, 1);

                    // Update the notifications
                    this._notifications.next(notifications);
                })
            ).subscribe();
    }
}
