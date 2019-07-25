import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FaqGroup, GuideGroup } from 'app/modules/admin/pages/help-center/help-center.type';

@Injectable({
    providedIn: 'root'
})
export class HelpCenterService
{
    // Private
    private _faqs: BehaviorSubject<FaqGroup[] | null>;
    private _guides: BehaviorSubject<GuideGroup[] | null>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the private defaults
        this._faqs = new BehaviorSubject(null);
        this._guides = new BehaviorSubject(null);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for FAQs
     */
    get faqs$(): Observable<FaqGroup[]>
    {
        return this._faqs.asObservable();
    }

    /**
     * Getter for guides
     */
    get guides$(): Observable<GuideGroup[]>
    {
        return this._guides.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get all FAQs
     */
    getAllFaqs(): Observable<FaqGroup[]>
    {
        return this._httpClient.get<FaqGroup[]>('api/apps/help-center/faqs').pipe(
            tap((response: any) => {
                this._faqs.next(response);
            })
        );
    }

    /**
     * Get FAQs by category using a field:value pair
     *
     * @param field
     * @param value
     */
    getFaqsByCategory(field, value): Observable<FaqGroup[]>
    {
        return this._httpClient.get<FaqGroup[]>('api/apps/help-center/faqs', {
            params: {
                field,
                value
            }
        }).pipe(
            tap((response: any) => {
                this._faqs.next(response);
            })
        );
    }

    /**
     * Get all guides limited per category by the given number
     *
     * @param limit
     */
    getAllGuides(limit = '4'): Observable<GuideGroup[]>
    {
        return this._httpClient.get<GuideGroup[]>('api/apps/help-center/guides', {
            params: {limit}
        }).pipe(
            tap((response: any) => {
                this._guides.next(response);
            })
        );
    }

    /**
     * Get guides by category using a field:value pair
     *
     * @param field
     * @param value
     */
    getGuidesByCategory(field, value): Observable<GuideGroup[]>
    {
        return this._httpClient.get<GuideGroup[]>('api/apps/help-center/guides', {
            params: {
                field,
                value
            }
        }).pipe(
            tap((response: any) => {
                this._guides.next(response);
            })
        );
    }
}
