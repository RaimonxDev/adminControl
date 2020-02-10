import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AsmHorizontalNavigationComponent } from '@assembly/components/navigation/horizontal/horizontal.component';
import { AsmNavigationService } from '@assembly/components/navigation/navigation.service';
import { AsmNavigationItem } from '@assembly/components/navigation/navigation.types';

@Component({
    selector       : 'asm-horizontal-navigation-branch-item',
    templateUrl    : './branch.component.html',
    styles         : [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsmHorizontalNavigationBranchItemComponent implements OnInit, OnDestroy
{
    // Child
    @Input()
    child: boolean;

    // Item
    @Input()
    item: AsmNavigationItem;

    // Mat menu
    @ViewChild('matMenu', {static: true})
    matMenu: MatMenu;

    // Name
    @Input()
    name: string;

    // Private
    private _asmHorizontalNavigationComponent: AsmHorizontalNavigationComponent;
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
        this.child = false;
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
        this._asmHorizontalNavigationComponent = this._asmNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._asmHorizontalNavigationComponent.onRefreshed.pipe(
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
     * Trigger the change detection
     */
    triggerChangeDetection(): void
    {
        // Mark for check
        this._changeDetectorRef.markForCheck();
    }
}
