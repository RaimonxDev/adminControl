import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AsmShortcut } from '@assembly/components/shortcuts/shortcut.type';
import { map, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AsmShortcutsService
{
    // Private
    private _shortcuts: BehaviorSubject<AsmShortcut[] | null>;

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
        this._shortcuts = new BehaviorSubject(null);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for shortcuts
     */
    get shortcuts$(): Observable<AsmShortcut[]>
    {
        return this._shortcuts.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Store shortcuts (bulk load)
     *
     * @param shortcuts
     */
    store(shortcuts: AsmShortcut[]): Observable<AsmShortcut[]>
    {
        // Load the shortcuts
        this._shortcuts.next(shortcuts);

        // Return the shortcuts
        return this.shortcuts$;
    }

    /**
     * Create a shortcut
     *
     * @param newShortcut
     */
    create(newShortcut: AsmShortcut): void
    {
        this.shortcuts$
            .pipe(
                take(1),
                map((shortcuts) => {

                    // Update the shortcuts with the new shortcut
                    this._shortcuts.next([...shortcuts, newShortcut]);
                })
            ).subscribe();
    }

    /**
     * Update the given shortcut
     *
     * @param updatedShortcut
     */
    update(updatedShortcut: AsmShortcut): void
    {
        this.shortcuts$
            .pipe(
                take(1),
                map((shortcuts) => {

                    // Find the index of the updated shortcut
                    const index = shortcuts.findIndex(item => item.id === updatedShortcut.id);

                    // Update the shortcut
                    shortcuts[index] = updatedShortcut;

                    // Update the shortcuts
                    this._shortcuts.next(shortcuts);
                })
            ).subscribe();
    }

    /**
     * Delete the given shortcut
     *
     * @param deletedShortcut
     */
    delete(deletedShortcut: AsmShortcut): void
    {
        this.shortcuts$
            .pipe(
                take(1),
                map((shortcuts) => {

                    // Find the index of the deleted shortcut
                    const index = shortcuts.findIndex(item => item.id === deletedShortcut.id);

                    // Delete the shortcut
                    shortcuts.splice(index, 1);

                    // Update the shortcuts
                    this._shortcuts.next(shortcuts);
                })
            ).subscribe();
    }

}
