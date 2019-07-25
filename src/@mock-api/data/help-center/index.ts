import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AsmMockApiService } from '@mock-api/mock-api.service';
import { faqCategories as faqCategoriesData, faqs as faqsData, guideCategories as guideCategoriesData, guides as guidesData } from '@mock-api/data/help-center/data';

@Injectable({
    providedIn: 'root'
})
export class MockHelpCenterApi
{
    // Private
    private _faqCategories: any[];
    private _faqs: any[];
    private _guideCategories: any[];
    private _guides: any[];

    /**
     * Constructor
     *
     * @param {AsmMockApiService} _asmMockApiService
     */
    constructor(
        private _asmMockApiService: AsmMockApiService
    )
    {
        // Set the data
        this._faqCategories = faqCategoriesData;
        this._faqs = faqsData;
        this._guideCategories = guideCategoriesData;
        this._guides = guidesData;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Initialize
     */
    init(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ FAQ categories - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/help-center/categories/faqs')
            .reply(() => {

                return [
                    200,
                    _.cloneDeep(this._faqCategories)
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ FAQs - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/help-center/faqs')
            .reply((request) => {

                // Get the field and value
                const field = request.params.get('field');
                const value = request.params.get('value');

                // Prepare the results
                const results = [];

                // Get all FAQs
                const faqs = _.cloneDeep(this._faqs);

                // If field or value not provided...
                if ( !field || !value )
                {
                    // Get the categories
                    const categories = _.cloneDeep(this._faqCategories);

                    // Go through each category and set the results
                    categories.forEach((category) => {

                        results.push(
                            {
                                category,
                                faqs: faqs.filter(faq => faq.categoryId === category.id)
                            }
                        );
                    });
                }
                // Otherwise...
                else
                {
                    // Get the FAQ categories
                    const categories = _.cloneDeep(this._faqCategories);

                    // Find the category by the field:value pair
                    const category: any = categories.find(item => item[field] === value);

                    // Set the results
                    results.push(
                        {
                            category,
                            faqs: faqs.filter(faq => faq.categoryId === category.id)
                        }
                    );
                }

                return [
                    200,
                    results
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Guide categories - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/help-center/categories/guides')
            .reply(() => {

                return [
                    200,
                    _.cloneDeep(this._guideCategories)
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Guides - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/help-center/guides')
            .reply((request) => {

                // Get the field, value & limit
                const field = request.params.get('field');
                const value = request.params.get('value');
                const limit = request.params.get('limit');

                // Prepare the results
                const results = [];

                // Get all Guides
                const guides = _.cloneDeep(this._guides);

                // If field or value not provided...
                if ( limit && (!field || !value) )
                {
                    // Parse the limit as an integer
                    const count = parseInt(limit, 10);

                    // Get the categories
                    const categories = _.cloneDeep(this._guideCategories);

                    // Go through each category and set the results
                    categories.forEach((category) => {

                        results.push(
                            {
                                category,
                                guides       : guides.filter(guide => guide.categoryId === category.id).slice(0, count),
                                moreAvailable: guides.filter(guide => guide.categoryId === category.id).length > count
                            }
                        );
                    });
                }
                // Otherwise...
                else
                {
                    // Get the Guide categories
                    const categories = _.cloneDeep(this._guideCategories);

                    // Find the category by the field:value pair
                    const category: any = categories.find(item => item[field] === value);

                    // Set the results
                    results.push(
                        {
                            category,
                            guides       : guides.filter(guide => guide.categoryId === category.id),
                            moreAvailable: false
                        }
                    );
                }

                return [
                    200,
                    results
                ];
            });
    }
}
