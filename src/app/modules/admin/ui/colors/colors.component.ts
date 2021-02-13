import { Component, ViewEncapsulation } from '@angular/core';
import { TreoAnimations } from '@treo/animations';

@Component({
    selector     : 'colors',
    templateUrl  : './colors.component.html',
    styleUrls    : ['./colors.component.scss'],
    animations   : TreoAnimations,
    encapsulation: ViewEncapsulation.None
})
export class ColorsComponent
{
    hues: string[] = ['900', '800', '700', '600', '500', '400', '300', '200', '100', '50'];
    themePalettes: string[] = [
        'primary',
        'accent',
        'warn',
        'white',
        'black'
    ];
    treoPalettes: string[] = [
        'gray',
        'cool-gray',
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

    /**
     * Constructor
     */
    constructor()
    {
    }
}
