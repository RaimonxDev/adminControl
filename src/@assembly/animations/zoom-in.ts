import { animate, style, transition, trigger } from '@angular/animations';

export const zoomIn = trigger('zoomIn', [

    // In
    transition('void => *, false => true', [
        style({
            opacity  : 0,
            transform: 'scale(0.5)'
        }),
        animate('225ms cubic-bezier(0.4, 0, 0.2, 1)', style({
            opacity  : 1,
            transform: 'scale(1)'
        }))
    ])

]);
