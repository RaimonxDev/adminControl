import { NgModule } from '@angular/core';
import { ConfigService } from 'app/core/config/config.service';

@NgModule()
export class ConfigModule
{
    /**
     * Constructor
     *
     * @param {ConfigService} _configService
     */
    constructor(
        private _configService: ConfigService
    )
    {
    }
}
