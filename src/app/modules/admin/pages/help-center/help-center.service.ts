import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FaqCategory, Faqs } from 'app/modules/admin/pages/help-center/help-center.type';

@Injectable({
    providedIn: 'root'
})
export class HelpCenterService
{
    // Private
    private _faqCategories: BehaviorSubject<FaqCategory[] | null>;
    private _faqs: BehaviorSubject<Faqs[] | null>;

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
        this._faqCategories = new BehaviorSubject(null);
        this._faqs = new BehaviorSubject(null);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for FAQ categories
     */
    get faqCategories$(): Observable<FaqCategory[]>
    {
        return this._faqCategories.asObservable();
    }

    /**
     * Getter for FAQs
     */
    get faqs$(): Observable<Faqs[]>
    {
        return this._faqs.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get FAQ categories
     */
    getFaqCategories(): Observable<FaqCategory[]>
    {
        return this._httpClient.get<FaqCategory[]>('api/apps/help-center/categories/faqs').pipe(
            tap((response: any) => {
                this._faqCategories.next(response);
            })
        );
    }

    /**
     * Get all FAQs
     */
    getAllFaqs(): Observable<Faqs[]>
    {
        return this._httpClient.get<Faqs[]>('api/apps/help-center/faqs').pipe(
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
    getFaqsByCategory(field, value): Observable<Faqs[]>
    {
        return this._httpClient.get<Faqs[]>('api/apps/help-center/faqs', {
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
}
