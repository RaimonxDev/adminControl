import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as _ from 'lodash';
import { AppConfig, appConfig } from 'app/config/app';

@Injectable({
    providedIn: 'root'
})
export class ConfigService
{
    // Private
    private _config: BehaviorSubject<AppConfig>;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the private defaults
        this._config = new BehaviorSubject(appConfig);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter and getter for config
     */
    set config(value: any)
    {
        // Merge the new config over to the current config
        const config = _.merge({}, this._config.getValue(), value);

        // Execute the observable
        this._config.next(config);
    }

    get config$(): Observable<AppConfig>
    {
        return this._config.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resets the config to the default
     */
    reset(): void
    {
        // Set the config
        this._config.next(appConfig);
    }
}

