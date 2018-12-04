import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { IconsService } from 'app/modules/ui/icons/icons.service';
import { FormControl } from '@angular/forms';

@Component({
    selector     : 'icons',
    templateUrl  : './icons.component.html',
    styleUrls    : ['./icons.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class IconsComponent implements OnInit, OnDestroy
{
    data: any;
    filteredIcons: any[];
    searchInput: FormControl;
    iconSizeInput: FormControl;

    // Private
    @ViewChild('content')
    private _content: ElementRef;

    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {IconsService} _iconsService
     */
    constructor(
        private _iconsService: IconsService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.searchInput = new FormControl('');
        this.iconSizeInput = new FormControl('32');
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this._iconsService.onIconsUpdated
            .pipe(
                filter((data) => {
                    return data !== null;
                }),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe((data) => {

                // Store the data
                this.data = data;
                this.filteredIcons = data.icons;

                // Clear the search input
                this.searchInput.setValue('');
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Filter icons
     *
     * @param event
     */
    filterIcons(event): void
    {
        // Get the value
        const value = event.target.value;

        // Filter the icons
        this.filteredIcons = this.data.icons.filter(icon => {
            return icon.name.includes(value);
        });
    }
}
