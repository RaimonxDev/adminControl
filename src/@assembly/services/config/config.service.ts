import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as _ from 'lodash';
import { ASM_APP_CONFIG } from '@assembly/services/config/config.constants';

@Injectable({
    providedIn: 'root'
})
export class AsmConfigService
{
    // Private
    private _config: BehaviorSubject<any>;

    /**
     * Constructor
     */
    constructor(@Inject(ASM_APP_CONFIG) config: any)
    {
        console.log('...asmConfigService constructor...');

        // Set the private defaults
        this._config = new BehaviorSubject(config);
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

    get config$(): Observable<any>
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
        this._config.next(this.config);
    }
}

