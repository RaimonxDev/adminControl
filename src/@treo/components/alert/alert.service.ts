import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TreoAlertService
{
    // Private
    private _onDismiss: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
    private _onShow: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for onDismiss
     */
    get onDismiss(): Observable<any>
    {
        return this._onDismiss.asObservable();
    }

    /**
     * Getter for onShow
     */
    get onShow(): Observable<any>
    {
        return this._onShow.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Dismiss the alert
     *
     * @param name
     */
    dismiss(name: string): void
    {
        // Return if the name is not provided
        if ( !name )
        {
            return;
        }

        // Execute the observable
        this._onDismiss.next(name);
    }

    /**
     * Show the dismissed alert
     *
     * @param name
     */
    show(name: string): void
    {
        // Return if the name is not provided
        if ( !name )
        {
            return;
        }

        // Execute the observable
        this._onShow.next(name);
    }

}
