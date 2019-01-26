import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';

import { AsmHighlightService } from '@assembly/components/highlight/highlight.service';

@Component({
    selector     : 'asm-highlight',
    templateUrl  : './highlight.component.html',
    styles       : [],
    encapsulation: ViewEncapsulation.None,
    exportAs     : 'asmHighlight'
})
export class AsmHighlightComponent implements OnInit
{
    // Code element
    @ViewChild('code')
    codeElementRef: ElementRef;

    // Private
    private _code: string | null;
    private _lang: string | null;

    /**
     * Constructor
     *
     * @param {AsmHighlightService} _asmHighlightService
     * @param {ElementRef} _elementRef
     * @param {Renderer2} _renderer2
     */
    constructor(
        private _asmHighlightService: AsmHighlightService,
        private _elementRef: ElementRef,
        private _renderer2: Renderer2
    )
    {
        // Set the private defaults
        this._code = null;
        this._lang = null;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter and getter for the code
     */
    @Input()
    set code(value: string | null)
    {
        // If the value is the same, return...
        if ( this.code === value )
        {
            return;
        }

        // Set the code
        this._code = value;

        // Highlight and insert the code
        this._highlightAndInsert();
    }

    get code(): string | null
    {
        return this._code;
    }

    /**
     * Setter and getter for the language
     */
    @Input()
    set lang(value: string | null)
    {
        // If the value is the same, return...
        if ( this.lang === value )
        {
            return;
        }

        // Set the language
        this._lang = value;

        // Highlight and insert the code
        this._highlightAndInsert();
    }

    get lang(): string | null
    {
        return this._lang;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Return, if there is no language set
        if ( !this.lang )
        {
            return;
        }

        // If there is no code input, get the code from
        // the textarea, highlight it and insert it
        if ( !this.code )
        {
            // Get the code
            this.code = this._elementRef.nativeElement.children[0].value;

            // Highlight and insert
            this._highlightAndInsert();
        }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Highlight and insert the highlighted code
     *
     * @private
     */
    private _highlightAndInsert(): void
    {
        // Return, if the code or language is not defined
        if ( !this.code || !this.lang )
        {
            return;
        }

        // Highlight the source and get the container div
        const highlightedCode = this._asmHighlightService.highlight(this.code, this.lang);

        // Fill the container with pre and code blocks and put the highlighted code into
        this._renderer2.setProperty(this.codeElementRef.nativeElement, 'innerHTML', highlightedCode);

        // Remove the textarea element if it exists
        if ( this._elementRef.nativeElement.children[0].nodeName.toLowerCase() === 'textarea' )
        {
            this._renderer2.removeChild(this._elementRef.nativeElement, this._elementRef.nativeElement.children[0]);
        }
    }
}
