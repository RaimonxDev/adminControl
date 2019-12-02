import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AsmNotification } from '@assembly/components/notifications/notifications.type';

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
     * Store notifications (bulk load)
     *
     * @param notifications
     */
    store(notifications: AsmNotification[]): Observable<AsmNotification[]>
    {
        // Load the notifications
        this._notifications.next(notifications);

        // Return the notifications
        return this.notifications$;
    }

    /**
     * Create a single notification
     *
     * @param notification
     */
    create(notification: AsmNotification): void
    {
        // Get the current notifications array
        const currentNotifications = this._notifications.value;

        // Push the notification
        currentNotifications.push(notification);

        // Execute the observable
        this._notifications.next(currentNotifications);
    }

    /**
     * Update the notification
     *
     * @param notification
     */
    update(notification: AsmNotification): void
    {
        this.notifications$
            .pipe(
                take(1),
                map((notifications) => {

                    // Find the index of the given notification and update it
                    const index = notifications.findIndex(item => item.id === notification.id);
                    notifications[index] = notification;

                    // Update the notifications
                    this._notifications.next(notifications);
                })
            ).subscribe();
    }

    /**
     * Delete the given notification
     *
     * @param notification
     */
    delete(notification: AsmNotification): void
    {
        this.notifications$
            .pipe(
                take(1),
                map((notifications) => {

                    // Find the index of the deleted notification
                    const index = notifications.findIndex(item => item.id === notification.id);

                    // Delete the notification
                    notifications.splice(index, 1);

                    // Update the notifications
                    this._notifications.next(notifications);
                })
            ).subscribe();
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
}
