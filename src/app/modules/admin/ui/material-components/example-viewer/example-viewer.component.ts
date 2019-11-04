import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EXAMPLE_COMPONENTS } from 'app/modules/admin/ui/material-components/example.module';

/** Regular expression that matches a file name and its extension */
const fileExtensionRegex = /(.*)\.(\w+)/;

export interface LiveExample
{
    title: string;
    component: any;
    additionalFiles?: string[];
    selectorName?: string;
}

@Component({
    selector     : 'material-components-example-viewer',
    templateUrl  : './example-viewer.component.html',
    styleUrls    : ['./example-viewer.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MaterialComponentsExampleViewerComponent
{
    /** Component portal for the currently displayed example. */
    selectedPortal: ComponentPortal<any>;

    /** Map of example files that should be displayed in the view-source tab. */
    exampleTabs: { [tabName: string]: string };

    /** Data for the currently selected example. */
    exampleData: LiveExample;

    /** Whether the source for the example is being displayed. */
    showSource = false;

    /** String key of the currently displayed example. */
    @Input()
    get example(): string
    {
        return this._example;
    }

    set example(exampleName: string)
    {
        if ( exampleName && EXAMPLE_COMPONENTS[exampleName] )
        {
            this._example = exampleName;
            this.exampleData = EXAMPLE_COMPONENTS[exampleName];
            this.selectedPortal = new ComponentPortal(this.exampleData.component);
            this._generateExampleTabs();
        }
        else
        {
            console.error(`Could not find example: ${exampleName}`);
        }
    }

    private _example: string;

    constructor(
        private snackbar: MatSnackBar
        // private copier: CopierService
    )
    {
    }

    toggleSourceView(): void
    {
        this.showSource = !this.showSource;
    }

    copySource(text: string): void
    {
        /*if ( this.copier.copyText(text) )
        {
            this.snackbar.open('Code copied', '', {duration: 2500});
        }
        else
        {
            this.snackbar.open('Copy failed. Please try again!', '', {duration: 2500});
        }*/
    }

    _getExampleTabNames(): string[]
    {
        return Object.keys(this.exampleTabs);
    }

    private resolveHighlightedExampleFile(fileName: string): string
    {
        return `assets/angular-material-docs/docs-content/examples-highlighted/${fileName}`;
    }

    private _generateExampleTabs(): void
    {
        this.exampleTabs = {
            HTML: this.resolveHighlightedExampleFile(`${this.example}-example-html.html`),
            TS  : this.resolveHighlightedExampleFile(`${this.example}-example-ts.html`),
            CSS : this.resolveHighlightedExampleFile(`${this.example}-example-css.html`)
        };

        const additionalFiles = this.exampleData.additionalFiles || [];

        additionalFiles.forEach(fileName => {
            // Since the additional files refer to the original file name, we need to transform
            // the file name to match the highlighted HTML file that displays the source.
            const fileSourceName = fileName.replace(fileExtensionRegex, '$1-$2.html');
            this.exampleTabs[fileName] = this.resolveHighlightedExampleFile(fileSourceName);
        });
    }
}
