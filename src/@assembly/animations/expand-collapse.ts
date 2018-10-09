import { trigger, animate, style, transition, state } from '@angular/animations';

export const
    expandCollapse =
        trigger('expandCollapse', [

            // Collapsed
            state('void, collapsed', style({
                height : '0px',
                display: 'none'
            })),

            // Expanded
            state('*, expanded', style({
                height : '*',
                display: '*'
            })),

            // Transitions
            transition('void <=> *', animate('225ms cubic-bezier(0.4, 0, 0.2, 1)')),
            transition('collapsed <=> expanded', animate('225ms cubic-bezier(0.4, 0, 0.2, 1)'))
        ]);
