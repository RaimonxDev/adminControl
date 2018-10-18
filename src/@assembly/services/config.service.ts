import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { Platform } from '@angular/cdk/platform';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as _ from 'lodash';

import { AsmConfig } from '@assembly/types';

@Injectable({
    providedIn: 'root'
})
export class AsmConfigService
{
    // Private
    private _config: AsmConfig;
    private _configHasChanged: boolean;
    private _defaultConfig: AsmConfig;
    private _onConfigChanged: BehaviorSubject<any>;
    private _onDefaultConfigChanged: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {Platform} _platform
     * @param {Router} _router
     */
    constructor(
        private _platform: Platform,
        private _router: Router
    )
    {
        // Set the private defaults
        this._configHasChanged = false;
        this._onConfigChanged = new BehaviorSubject(null);
        this._onDefaultConfigChanged = new BehaviorSubject(null);

        this._defaultConfig = {
            colorTheme      : 'theme-default',
            customScrollbars: true
        };

        // Initialize the service
        this._init();
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

        // Set the configHasChanged flag
        this._configHasChanged = true;

        // Execute the observable
        this._onConfigChanged.next(this._config);
    }

    get config(): any | Observable<any>
    {
        return this._config;
    }

    /**
     * Setter and getter for default config
     */
    set defaultConfig(value)
    {
        // Merge the new config over to the default config
        this._defaultConfig = _.merge({}, this._defaultConfig, value);

        // Set the config
        this.config = this._defaultConfig;

        // Execute the observable
        this._onDefaultConfigChanged.next(this._defaultConfig);
    }

    get defaultConfig(): any
    {
        return this._defaultConfig;
    }

    /**
     * Getter for onConfigChanged
     */
    get onConfigChanged(): Observable<AsmConfig>
    {
        return this._onConfigChanged.asObservable();
    }

    /**
     * Getter for onDefaultConfigChanged
     */
    get onDefaultConfigChanged(): Observable<AsmConfig>
    {
        return this._onDefaultConfigChanged.asObservable();
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
        this._config = _.cloneDeep(this._defaultConfig);

        // Reload the default config on every RoutesRecognized event if
        // the current layout config is different from the default one
        this._router.events
            .pipe(filter(event => event instanceof RoutesRecognized))
            .subscribe(() => {

                // If the current configuration does not equal to the default one
                // and if it hasn't been changed before the event...
                if ( !_.isEqual(this._config.layout.options, this._defaultConfig.layout.options) && !this._configHasChanged )
                {
                    // Reset the layout options from the default config
                    this.config = _.cloneDeep(this._defaultConfig.layout);
                }

                // Reset the configHasChanged flag
                this._configHasChanged = false;
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
        this.config = _.cloneDeep(this.defaultConfig);
    }
}

