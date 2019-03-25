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
            'asm-white',
            'asm-black'
        ];
        this.asmPalettes = [
            'asm-red',
            'asm-pink',
            'asm-purple',
            'asm-deep-purple',
            'asm-indigo',
            'asm-blue',
            'asm-light-blue',
            'asm-cyan',
            'asm-teal',
            'asm-green',
            'asm-light-green',
            'asm-lime',
            'asm-yellow',
            'asm-amber',
            'asm-orange',
            'asm-deep-orange',
            'asm-brown',
            'asm-grey',
            'asm-blue-grey',
        ];
        this.hues = ['900', '800', '700', '600', '500', '400', '300', '200', '100', '50', 'A100', 'A200', 'A400', 'A700'];
    }
}
