import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { AsmMediaWatcherModule } from '@assembly/media-watcher/public-api';
import { AsmSplashScreenModule } from '@assembly/splash-screen/public-api';

@NgModule({
    imports  : [
        AsmMediaWatcherModule,
        AsmSplashScreenModule
    ],
    providers: [
        {
            // Use the 'fill' appearance on form fields by default
            provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill'
            }
        }
    ]
})
export class AsmModule
{
    /**
     * Constructor
     *
     * @param parentModule
     */
    constructor(
        @Optional() @SkipSelf() parentModule?: AsmModule
    )
    {
        if ( parentModule )
        {
            throw new Error('AsmCoreModule has already been loaded. Import this module in the AppModule only!');
        }
    }
}
