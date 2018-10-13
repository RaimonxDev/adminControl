import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { Platform } from '@angular/cdk/platform';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as _ from 'lodash';

// Create the injection token for the custom settings
export const ASM_CONFIG = new InjectionToken('asmConfig');

@Injectable({
    providedIn: 'root'
})
export class AsmConfigService
{
    configHasChanged: boolean;

    // Private
    private _config: BehaviorSubject<any>;
    private readonly _defaultConfig: any;

    /**
     * Constructor
     *
     * @param {Platform} _platform
     * @param {Router} _router
     * @param {ASM_CONFIG} _asmConfig
     */
    constructor(
        private _platform: Platform,
        private _router: Router,
        @Inject(ASM_CONFIG) private _asmConfig
    )
    {
        // Set the defaults
        this.configHasChanged = false;

        // Set the default config from the user provided config (from forRoot)
        this._defaultConfig = _asmConfig;

        // Initialize the service
        this._init();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Set and get the config
     */
    set config(value)
    {
        // Get the value from the behavior subject
        let config = this._config.getValue();

        // Merge the new config
        config = _.merge({}, config, value);

        // Set the configHasChanged flag
        this.configHasChanged = true;

        // Execute the observable
        this._config.next(config);
    }

    get config(): any | Observable<any>
    {
        return this._config.asObservable();
    }

    /**
     * Get default config
     *
     * @returns {any}
     */
    get defaultConfig(): any
    {
        return this._defaultConfig;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Initialize
     *
     * @private
     */
    private _init(): void
    {
        /**
         * Disable custom scrollbars if browser is mobile
         */
        if ( this._platform.ANDROID || this._platform.IOS )
        {
            this._defaultConfig.customScrollbars = false;
        }

        // Set the config from the default config
        this._config = new BehaviorSubject(_.cloneDeep(this._defaultConfig));

        // Reload the default layout config on every RoutesRecognized event
        // if the current layout config is different from the default one
        this._router.events
            .pipe(filter(event => event instanceof RoutesRecognized))
            .subscribe(() => {

                // If the current configuration does not equal to the default one
                // and if it hasn't been changed before the event...
                if ( !_.isEqual(this._config.getValue().layout, this._defaultConfig.layout) && !this.configHasChanged )
                {
                    // Clone the current config
                    const config = _.cloneDeep(this._config.getValue());

                    // Reset the layout from the default config
                    config.layout = _.cloneDeep(this._defaultConfig.layout);

                    // Set the config
                    this._config.next(config);
                }

                // Reset the configHasChanged flag
                this.configHasChanged = false;
            });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Reset to the default config
     */
    reset(): void
    {
        // Set the config from the default config
        this._config.next(_.cloneDeep(this._defaultConfig));
    }
}

