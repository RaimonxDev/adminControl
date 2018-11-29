import {
    Component, ContentChild, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, TemplateRef, ViewEncapsulation
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, map, takeUntil } from 'rxjs/operators';
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
    opened: boolean;
    searchControl: FormControl;

    @ContentChild(TemplateRef)
    resultTemplate: TemplateRef<any>;

    @Input()
    debounce: number;

    @Input()
    minLength: number;

    @Input()
    noResultsText: string;

    @Input()
    placeholder: string;

    @Output()
    search: EventEmitter<any>;

    // Private
    private _appearance: 'basic' | 'bar' | 'fullscreen';
    private _results: any[] | null;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ElementRef} _elementRef
     * @param {Renderer2} _renderer
     */
    constructor(
        private _elementRef: ElementRef,
        private _renderer: Renderer2
    )
    {
        // Set the private defaults
        this._results = null;
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.appearance = 'basic';
        this.debounce = this.debounce || 300;
        this.minLength = this.minLength || 3;
        this.opened = false;
        this.search = new EventEmitter();
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
        appearanceClassName = 'asm-search-appearance-' + this.appearance;
        this._renderer.addClass(this._elementRef.nativeElement, appearanceClassName);
    }

    get appearance(): 'basic' | 'bar' | 'fullscreen'
    {
        return this._appearance;
    }

    @Input()
    set results(value: any[] | null)
    {
        // If the value is the same, return...
        if ( this._results === value )
        {
            return;
        }

        // Store the results
        this._results = value;
    }

    get results(): any[] | null
    {
        return this._results;
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
                takeUntil(this._unsubscribeAll),
                map((value) => {

                    // Set the search results to null if there is no value or
                    // the length of the value is smaller than the minLength
                    // so the autocomplete panel can be closed
                    if ( !value || value.length < this.minLength )
                    {
                        this.results = null;
                    }

                    // Continue
                    return value;
                }),
                filter((value) => {

                    // Filter out undefined/null/false statements and also
                    // filter out the values that are smaller than minLength
                    return value && value.length >= this.minLength;
                })
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
