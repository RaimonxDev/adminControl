import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { DocsService } from 'app/modules/docs/docs.service';

@Component({
    selector     : 'docs',
    templateUrl  : './docs.component.html',
    styleUrls    : ['./docs.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DocsComponent implements OnInit, OnDestroy
{
    data: any;

    // Private
    @ViewChild('content')
    private _content: ElementRef;

    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {DocsService} _docsService
     */
    constructor(
        private _docsService: DocsService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to docs data changes
        this._docsService
            .onDocsUpdated
            .pipe(
                filter((data) => {
                    return data !== null;
                }),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe((data) => {
                this.data = data;
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
