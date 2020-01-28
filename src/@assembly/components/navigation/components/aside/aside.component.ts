import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AsmNavigationComponent } from '@assembly/components/navigation/navigation.component';
import { AsmNavigationService } from '@assembly/components/navigation/navigation.service';
import { AsmNavigationItem } from '@assembly/components/navigation/navigation.types';

@Component({
    selector       : 'asm-navigation-aside-item',
    templateUrl    : './aside.component.html',
    styles         : [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsmNavigationAsideItemComponent implements OnInit, OnDestroy
{
    // Active
    @Input()
    active: boolean;

    // Auto collapse
    @Input()
    autoCollapse: boolean;

    // Item
    @Input()
    item: AsmNavigationItem;

    // Name
    @Input()
    name: string;

    // Show tooltips
    @Input()
    showTooltips: boolean;

    // Skip children
    @Input()
    skipChildren: boolean;

    // Private
    private _asmNavigationComponent: AsmNavigationComponent;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AsmNavigationService} _asmNavigationService
     * @param {ChangeDetectorRef} _changeDetectorRef
     */
    constructor(
        private _asmNavigationService: AsmNavigationService,
        private _changeDetectorRef: ChangeDetectorRef
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.skipChildren = false;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the parent navigation component
        this._asmNavigationComponent = this._asmNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._asmNavigationComponent.onRefreshed.pipe(
            takeUntil(this._unsubscribeAll)
        ).subscribe(() => {

            // Mark for check
            this._changeDetectorRef.markForCheck();
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
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackById(index, item): number
    {
        return item.id || index;
    }
}
