import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'demo-placeholder',
    template     : `
        <div class="w-full h-400 min-h-400 max-h-400 border-2 border-dashed border-gray-300 rounded-lg"></div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class DemoPlaceholderComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
