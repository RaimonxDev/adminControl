import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector     : 'mail',
    templateUrl  : './mail.component.html',
    styleUrls    : ['./mail.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MailComponent implements OnInit, OnDestroy
{
    constructor(
        private _activatedRoute: ActivatedRoute
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
        // this._activatedRoute.params.subscribe(() => {
        //
        // });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {

    }
}
