import { trigger, animate, style, transition } from '@angular/animations';

export const zoomOut = trigger('zoomOut', [

    // Out
    transition('out => void, out => false', [
        style({
            opacity  : 1,
            transform: 'scale(1)'
        }),
        animate('225ms cubic-bezier(0.4, 0, 0.2, 1)', style({
            opacity  : 0,
            transform: 'scale(0.5)'
        }))
    ])

]);
