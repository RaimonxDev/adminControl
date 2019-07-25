import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HelpCenterService } from 'app/modules/admin/pages/help-center/help-center.service';
import { FaqGroup, GuideGroup } from 'app/modules/admin/pages/help-center/help-center.type';

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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FaqGroup[]>
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FaqGroup[]>
    {
        return this._helpCenterService.getAllFaqs();
    }
}

@Injectable({
    providedIn: 'root'
})
export class HelpCenterGuidesHomeResolver implements Resolve<any>
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GuideGroup[]>
    {
        return this._helpCenterService.getAllGuides();
    }
}

@Injectable({
    providedIn: 'root'
})
export class HelpCenterGuidesCategoryResolver implements Resolve<any>
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GuideGroup[]>
    {
        return this._helpCenterService.getGuidesByCategory('slug', route.paramMap.get('categorySlug'));
    }
}
