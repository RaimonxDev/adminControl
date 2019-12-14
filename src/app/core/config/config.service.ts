import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as _ from 'lodash';
import { appConfig } from 'app/config/app';

@Injectable({
    providedIn: 'root'
})
export class ConfigService
{
    // Private
    private _config: any;
    private _onConfigChanged: BehaviorSubject<any>;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the private defaults
        this._onConfigChanged = new BehaviorSubject(null);

        // Set the defaults
        this.config = appConfig;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter and getter for config
     */
    set config(value)
    {
        // Merge the new config over to the current config
        this._config = _.merge({}, this._config, value);

        // Execute the observable
        this._onConfigChanged.next(this._config);
    }

    get config(): any | Observable<any>
    {
        return this._config;
    }

    /**
     * Getter for onConfigChanged
     */
    get onConfigChanged(): Observable<any>
    {
        return this._onConfigChanged.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resets the config to the given value
     *
     * @param value
     * @param emitEvent
     */
    reset(value: {} = {}, emitEvent: boolean = false): void
    {
        // Set the config
        this._config = value;

        // Execute the observable if emitEvent is true
        if ( emitEvent )
        {
            this._onConfigChanged.next(this._config);
        }
    }
}

