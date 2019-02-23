import { animate, style, transition, trigger } from '@angular/animations';

export const zoomOut = trigger('zoomOut', [

    // Out
    transition('* => void, true => false', [
        style({
            opacity  : 1,
            transform: 'scale(1)'
        }),
        animate('400ms cubic-bezier(0.4, 0, 0.2, 1)', style({
            opacity  : 0,
            transform: 'scale(0.5)'
        }))
    ])

]);
