import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HelpCenterService } from 'app/modules/admin/pages/help-center/help-center.service';
import { FaqCategory, Faqs } from 'app/modules/admin/pages/help-center/help-center.type';

@Injectable({
    providedIn: 'root'
})
export class HelpCenterFaqCategoriesResolver implements Resolve<any>
{
    /**
     * Constructor
     *
     * @param {HelpCenterService} _helpCenterService
     */
    constructor(
        private _helpCenterService: HelpCenterService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FaqCategory[]>
    {
        return this._helpCenterService.getFaqCategories();
    }
}

@Injectable({
    providedIn: 'root'
})
export class HelpCenterHomeFaqsResolver implements Resolve<any>
{
    /**
     * Constructor
     *
     * @param {HelpCenterService} _helpCenterService
     */
    constructor(
        private _helpCenterService: HelpCenterService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Faqs[]>
    {
        return this._helpCenterService.getFaqsByCategory('slug', 'most-asked');
    }
}

@Injectable({
    providedIn: 'root'
})
export class HelpCenterFaqsResolver implements Resolve<any>
{
    /**
     * Constructor
     *
     * @param {HelpCenterService} _helpCenterService
     */
    constructor(
        private _helpCenterService: HelpCenterService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Faqs[]>
    {
        return this._helpCenterService.getAllFaqs();
    }
}
