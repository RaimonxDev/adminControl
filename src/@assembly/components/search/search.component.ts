import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector     : 'asm-search',
    templateUrl  : './search.component.html',
    styleUrls    : ['./search.component.scss'],
    encapsulation: ViewEncapsulation.None,
    exportAs     : 'asmSearch'
})
export class AsmSearchComponent implements OnInit, OnDestroy
{
    searchControl: FormControl;
    searchResults: any[];

    @Input()
    debounce: number;

    @Output()
    search: EventEmitter<any>;

    // Private
    private _appearance: 'basic' | 'bar' | 'fullscreen';
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ElementRef} _elementRef
     * @param {FormBuilder} _formBuilder
     * @param {Renderer2} _renderer
     */
    constructor(
        private _elementRef: ElementRef,
        private _formBuilder: FormBuilder,
        private _renderer: Renderer2
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.appearance = 'basic';
        this.debounce = this.debounce || 300;
        this.search = new EventEmitter();
        this.searchResults = [];
        this.searchControl = new FormControl();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    @Input()
    set appearance(value: 'basic' | 'bar' | 'fullscreen')
    {
        // If the value is the same, return...
        if ( this._appearance === value )
        {
            return;
        }

        let appearanceClassName;

        // Remove the previous appearance class
        appearanceClassName = 'asm-search-appearance-' + this.appearance;
        this._renderer.removeClass(this._elementRef.nativeElement, appearanceClassName);

        // Store the appearance
        this._appearance = value;

        // Add the new appearance class
        appearanceClassName = 'asm-navigation-appearance-' + this.appearance;
        this._renderer.addClass(this._elementRef.nativeElement, appearanceClassName);
    }

    get appearance(): 'basic' | 'bar' | 'fullscreen'
    {
        return this._appearance;
    }

    @Input()
    set results(value: any[])
    {
        // If the value is the same, return...
        if ( this.searchResults === value )
        {
            return;
        }

        // Store the results
        this.searchResults = [...value];
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to the search field value changes
        this.searchControl.valueChanges
            .pipe(
                debounceTime(this.debounce),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe((value) => {
                this.search.emit(value);
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

}
