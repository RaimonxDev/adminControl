import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, Observable, Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { InventoryBrand, InventoryCategory, InventoryPagination, InventoryProduct, InventoryTag, InventoryVendor } from 'app/modules/admin/apps/ecommerce/inventory/inventory.types';
import { InventoryService } from 'app/modules/admin/apps/ecommerce/inventory/inventory.service';

@Component({
    selector       : 'inventory-list',
    templateUrl    : './inventory.component.html',
    styleUrls      : ['./inventory.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryListComponent implements OnInit, AfterViewInit, OnDestroy
{
    brands: InventoryBrand[];
    categories: InventoryCategory[];
    isLoading: boolean;
    pagination: InventoryPagination;
    products$: Observable<InventoryProduct[]>;
    productsCount: number;
    productsTableColumns: string[];
    searchInputControl: FormControl;
    tags: InventoryTag[];
    vendors: InventoryVendor[];

    // Private
    private _unsubscribeAll: Subject<any>;

    @ViewChild(MatPaginator)
    private _paginator: MatPaginator;

    @ViewChild(MatSort)
    private _sort: MatSort;

    /**
     * Constructor
     *
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {InventoryService} _inventoryService
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _inventoryService: InventoryService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.isLoading = false;
        this.productsCount = 0;
        this.productsTableColumns = ['sku', 'name', 'price', 'stock', 'active', 'actions'];
        this.searchInputControl = new FormControl();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the brands
        this._inventoryService.brands$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((brands: InventoryBrand[]) => {

                // Update the brands
                this.brands = brands;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Get the categories
        this._inventoryService.categories$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((categories: InventoryCategory[]) => {

                // Update the categories
                this.categories = categories;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Get the pagination
        this._inventoryService.pagination$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((pagination: InventoryPagination) => {

                // Update the pagination
                this.pagination = pagination;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Get the products
        this.products$ = this._inventoryService.products$;
        this._inventoryService.products$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((products: InventoryProduct[]) => {

                // Update the counts
                this.productsCount = products.length;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Get the tags
        this._inventoryService.tags$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((tags: InventoryTag[]) => {

                // Update the tags
                this.tags = tags;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Get the vendors
        this._inventoryService.vendors$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((vendors: InventoryVendor[]) => {

                // Update the vendors
                this.vendors = vendors;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void
    {
        // If the user changes the sort order, reset back to the first page.
        this._sort.sortChange
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this._paginator.pageIndex = 0;
            });

        // Get products if sort or page changes
        merge(this._sort.sortChange, this._paginator.page).pipe(
            switchMap(() => {
                this.isLoading = true;
                return this._inventoryService.getProducts(this._paginator.pageIndex, this._paginator.pageSize, this._sort.active, this._sort.direction);
            }),
            map(() => {
                this.isLoading = false;
            })
        ).subscribe();
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
     * On page changed
     *
     * @param event
     */
    pageChanged(event: PageEvent): void
    {
        const page = event.pageIndex.toString();
        const size = event.pageSize.toString();
        // this._inventoryService.getProducts(page, size).subscribe();
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }
}
