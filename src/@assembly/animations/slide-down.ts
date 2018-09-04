import { trigger, animate, style, transition, state } from '@angular/animations';

export const
    slideDown =
        trigger('slideDown', [
            state('0', style({
                height : '0px',
                display: 'none'
            })),
            state('1', style({
                height : '*',
                display: 'block'
            })),
            transition('1 => 0', animate('225ms cubic-bezier(0.4, 0, 0.2, 1)')),
            transition('0 => 1', animate('225ms cubic-bezier(0.4, 0, 0.2, 1)'))
        ]);
