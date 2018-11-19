import { Injectable } from '@angular/core';
import hljs from 'highlight.js';

@Injectable({
    providedIn: 'root'
})
export class AsmHighlightService
{
    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Re-align the indentation based on the first
     * non-whitespace indented character and remove
     * the whitespace only first and last lines
     *
     * @param code
     * @private
     */
    private _format(code: string): string
    {
        let firstCharIndentation: number | null = null;

        // Split the markdown into lines and store the lines
        const lines = code.split('\n');

        // If trimmed first line is an empty string, remove it
        if ( lines[0].trim() === '' )
        {
            lines.shift();
        }

        // If trimmed last line is an empty string, remove it
        if ( lines[lines.length - 1].trim() === '' )
        {
            lines.pop();
        }

        // Iterate through the lines to figure out the first
        // non-whitespace character indentation
        lines.forEach((line) => {

            // Skip the line if its length is zero
            if ( line.length === 0 )
            {
                return;
            }

            // We look at all the lines to find the smallest indentation
            // of the first non-whitespace char since the first ever line
            // is not necessarily has to be the line with the smallest
            // non-whitespace char indentation
            firstCharIndentation = firstCharIndentation === null ?
                line.search(/\S|$/) :
                Math.min(line.search(/\S|$/), firstCharIndentation);
        });

        // Iterate through the lines one more time, remove the extra
        // indentation, join them together and return it
        return lines.map((line) => {
            return line.substring(firstCharIndentation);
        }).join('\n');
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Highlight
     */
    highlight(code, language): string
    {
        // Format the code
        code = this._format(code);

        // Highlight and return the code
        return hljs.highlight(language, code).value;
    }
}
