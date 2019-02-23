import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AsmShortcut } from '@assembly/components/shortcuts/shortcut.type';

@Injectable({
    providedIn: 'root'
})
export class AsmShortcutsService
{
    // Private
    private _shortcuts: AsmShortcut[];
    private _onStored: BehaviorSubject<any>;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the private defaults
        this._onStored = new BehaviorSubject(null);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for onStored
     *
     * @returns {Observable<any>}
     */
    get onStored(): Observable<any>
    {
        return this._onStored.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Store the shortcuts
     *
     * @param shortcuts
     */
    storeShortcuts(shortcuts): void
    {
        // Store the shortcuts
        this._shortcuts = shortcuts;

        // Execute the observable
        this._onStored.next(shortcuts);
    }

    /**
     * Get shortcuts
     */
    getShortcuts(): any[]
    {
        return this._shortcuts;
    }

    addShorcut(): void
    {

    }

}
