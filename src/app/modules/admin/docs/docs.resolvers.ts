import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DocsService } from 'app/modules/admin/docs/docs.service';

@Injectable({
    providedIn: 'root'
})
export class DocsResolver implements Resolve<any>
{
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
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolve
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return this._docsService.getDocs(state.url);
    }
}
