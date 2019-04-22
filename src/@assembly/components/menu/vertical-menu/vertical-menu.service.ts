import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AsmVerticalMenuService
{
    autoCollapse: boolean;
    onCollapsableItemCollapsed: BehaviorSubject<any>;
    onCollapsableItemExpanded: BehaviorSubject<any>;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the defaults
        this.onCollapsableItemCollapsed = new BehaviorSubject(null);
        this.onCollapsableItemExpanded = new BehaviorSubject(null);
    }
}
