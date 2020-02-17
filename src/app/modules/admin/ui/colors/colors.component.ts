import { Component, ViewEncapsulation } from '@angular/core';
import { AsmAnimations } from '@assembly/animations';

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
            'gray',
            'red',
            'orange',
            'yellow',
            'green',
            'teal',
            'blue',
            'indigo',
            'purple',
            'pink'
        ];
        this.hues = ['900', '800', '700', '600', '500', '400', '300', '200', '100'];
    }
}
