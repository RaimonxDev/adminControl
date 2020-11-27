/**
 * Derived from Angular version class
 */
export class Version
{
    public readonly full: string;
    public readonly major: string;
    public readonly minor: string;
    public readonly patch: string;

    constructor(public version: string)
    {
        this.full = version;
        this.major = version.split('.')[0];
        this.minor = version.split('.')[1];
        this.patch = version.split('.').slice(2).join('.');
    }
}

// Version number from package.json will be extracted here via webpack
declare const __TREO_VERSION__: string;
export const VERSION = new Version(__TREO_VERSION__);
