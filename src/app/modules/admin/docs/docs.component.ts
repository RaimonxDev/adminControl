import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DocsService } from 'app/modules/admin/docs/docs.service';

@Component({
    selector       : 'docs',
    templateUrl    : './docs.component.html',
    styleUrls      : ['./docs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocsComponent implements OnInit
{
    docs$: Observable<any>;

    // Private
    @ViewChild('content')
    private _content: ElementRef;

    /**
     * Constructor
     *
     * @param {DocsService} _docsService
     */
    constructor(
        private _docsService: DocsService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Docs
        this.docs$ = this._docsService.docs$;
    }
}
