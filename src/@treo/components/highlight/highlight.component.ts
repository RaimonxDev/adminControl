import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EmbeddedViewRef, Input, OnChanges, Renderer2, SecurityContext, SimpleChanges, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TreoHighlightService } from '@treo/components/highlight/highlight.service';

@Component({
    selector       : 'textarea[treo-highlight]',
    templateUrl    : './highlight.component.html',
    styleUrls      : ['./highlight.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'treoHighlight'
})
export class TreoHighlightComponent implements OnChanges, AfterViewInit
{
    // Public
    @Input() code = '';
    @Input() lang = '';
    @ViewChild(TemplateRef) templateRef!: TemplateRef<any>;
    highlightedCode: string | null = null;

    // Private
    private _viewRef!: EmbeddedViewRef<any>;

    /**
     * Constructor
     *
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {DomSanitizer} _domSanitizer
     * @param {ElementRef} _elementRef
     * @param {Renderer2} _renderer2
     * @param {TreoHighlightService} _treoHighlightService
     * @param {ViewContainerRef} _viewContainerRef
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _domSanitizer: DomSanitizer,
        private _elementRef: ElementRef,
        private _renderer2: Renderer2,
        private _treoHighlightService: TreoHighlightService,
        private _viewContainerRef: ViewContainerRef
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On changes
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void
    {
        // Code & Lang
        if ( 'code' in changes || 'lang' in changes )
        {
            // Return if the viewContainerRef is not available
            if ( !this._viewContainerRef.length )
            {
                return;
            }

            // Highlight and insert the code
            this._highlightAndInsert();
        }
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void
    {
        // Return if there is no language set
        if ( !this.lang )
        {
            return;
        }

        // If there is no code input, get the code from
        // the textarea
        if ( !this.code )
        {
            // Get the code
            this.code = this._elementRef.nativeElement.value;
        }

        // Highlight and insert
        this._highlightAndInsert();
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
        // Return if the code or language is not defined
        if ( !this.code || !this.lang )
        {
            return;
        }

        // Destroy the component if there is already one
        if ( this._viewRef )
        {
            this._viewRef.destroy();
        }

        // Highlight and sanitize the code just in case
        this.highlightedCode = this._domSanitizer.sanitize(SecurityContext.HTML, this._treoHighlightService.highlight(this.code, this.lang));

        // Return if the highlighted code is null
        if ( this.highlightedCode === null )
        {
            return;
        }

        // Render and insert the template
        this._viewRef = this._viewContainerRef.createEmbeddedView(this.templateRef, {
            highlightedCode: this.highlightedCode,
            lang           : this.lang
        });

        // Detect the changes
        this._viewRef.detectChanges();
    }
}
