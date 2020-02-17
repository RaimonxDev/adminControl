import { NgModule } from '@angular/core';
import { AsmSplashScreenService } from '@assembly/splash-screen/splash-screen.service';

@NgModule({
    providers: [
        AsmSplashScreenService
    ]
})
export class AsmSplashScreenModule
{
    /**
     * Constructor
     *
     * @param {AsmSplashScreenService} _asmSplashScreenService
     */
    constructor(
        private _asmSplashScreenService: AsmSplashScreenService
    )
    {
    }
}
