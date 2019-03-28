import { Component, ViewEncapsulation } from '@angular/core';
import { AsmAnimations } from '@assembly';

@Component({
    selector     : 'colors',
    templateUrl  : './colors.component.html',
    styleUrls    : ['./colors.component.scss'],
    animations   : AsmAnimations,
    encapsulation: ViewEncapsulation.None
})
export class ColorsComponent
{
    asmPalettes: any[];
    themePalettes: any[];
    hues: any[];

    /**
     * Constructor
     */
    constructor()
    {
        // Set the defaults
        this.themePalettes = [
            'primary',
            'accent',
            'warn',
            'white',
            'black'
        ];
        this.asmPalettes = [
            'red',
            'pink',
            'purple',
            'deep-purple',
            'indigo',
            'blue',
            'light-blue',
            'cyan',
            'teal',
            'green',
            'light-green',
            'lime',
            'yellow',
            'amber',
            'orange',
            'deep-orange',
            'brown',
            'grey',
            'blue-grey',
        ];
        this.hues = ['900', '800', '700', '600', '500', '400', '300', '200', '100', '50', 'A100', 'A200', 'A400', 'A700'];
    }
}
