import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { AsmMockApi } from '@assembly/lib/mock-api/mock-api.interfaces';
import { AsmMockApiUtils } from '@assembly/lib/mock-api/mock-api.utils';
import { AsmMockApiService } from '@assembly/lib/mock-api/mock-api.service';
import { brands as brandsData, categories as categoriesData, products as productsData, tags as tagsData, vendors as vendorsData } from 'app/data/mock/ecommerce/inventory/data';

@Injectable({
    providedIn: 'root'
})
export class ECommerceInventoryMockApi implements AsmMockApi
{
    // Private
    private _categories: any[];
    private _brands: any[];
    private _products: any[];
    private _tags: any[];
    private _vendors: any[];

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
        this._categories = categoriesData;
        this._brands = brandsData;
        this._products = productsData;
        this._tags = tagsData;
        this._vendors = vendorsData;

        // Register the API endpoints
        this.register();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register
     */
    register(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Categories - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/ecommerce/inventory/categories')
            .reply(() => {

                return [
                    200,
                    _.cloneDeep(this._categories)
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Brands - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/ecommerce/inventory/brands')
            .reply(() => {

                return [
                    200,
                    _.cloneDeep(this._brands)
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Products - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/ecommerce/inventory/products', 625)
            .reply((request) => {

                // Get available queries
                const search = request.params.get('search');
                const sort = request.params.get('sort') || 'name';
                const order = request.params.get('order') || 'asc';
                const page = parseInt(request.params.get('page'), 10);
                const size = parseInt(request.params.get('size'), 10);

                // Clone the products
                let products = _.cloneDeep(this._products);

                // Sort the products
                if ( sort === 'sku' || sort === 'name' || sort === 'active' )
                {
                    products.sort((a, b) => {
                        const fieldA = a[sort].toString().toUpperCase();
                        const fieldB = b[sort].toString().toUpperCase();
                        return order === 'asc' ? fieldA.localeCompare(fieldB) : fieldB.localeCompare(fieldA);
                    });
                }
                else
                {
                    products.sort((a, b) => order === 'asc' ? a[sort] - b[sort] : b[sort] - a[sort]);
                }

                // If search exists...
                if ( search )
                {
                    // Filter the products
                    products = products.filter((contact) => {
                        return contact.name && contact.name.toLowerCase().includes(search.toLowerCase());
                    });
                }

                // Paginate - Start
                const productsLength = products.length;

                // Calculate pagination details
                const begin = page * size;
                const end = Math.min((size * (page + 1)), productsLength);
                const lastPage = Math.max(Math.ceil(productsLength / size), 1);

                // Prepare the pagination object
                let pagination = {};

                // If the requested page number is bigger than
                // the last possible page number, return null for
                // products but also send the last possible page so
                // the app can navigate to there
                if ( page > lastPage )
                {
                    products = null;
                    pagination = {
                        lastPage
                    };
                }
                else
                {
                    // Paginate the results by size
                    products = products.slice(begin, end);

                    // Prepare the pagination data
                    pagination = {
                        length    : productsLength,
                        size      : size,
                        page      : page,
                        lastPage  : lastPage,
                        startIndex: begin,
                        endIndex  : end - 1
                    };
                }
                // Paginate - End

                return [
                    200,
                    {
                        products,
                        pagination
                    }
                ];
            });
        /*
                // -----------------------------------------------------------------------------------------------------
                // @ Contacts Search - GET
                // -----------------------------------------------------------------------------------------------------
                this._asmMockApiService
                    .onGet('api/apps/contacts/search')
                    .reply((request) => {

                        // Get the search query
                        const query = request.params.get('query');

                        // Clone the contacts
                        let contacts = _.cloneDeep(this._contacts);

                        // If the query exists...
                        if ( query )
                        {
                            // Filter the contacts
                            contacts = contacts.filter((contact) => {
                                return contact.name && contact.name.toLowerCase().includes(query.toLowerCase());
                            });
                        }

                        // Sort the contacts by the name field by default
                        contacts.sort((a, b) => a.name.localeCompare(b.name));

                        return [
                            200,
                            contacts
                        ];
                    });

                // -----------------------------------------------------------------------------------------------------
                // @ Contact - GET
                // -----------------------------------------------------------------------------------------------------
                this._asmMockApiService
                    .onGet('api/apps/contacts/contact')
                    .reply((request) => {

                        // Get the id from the params
                        const id = request.params.get('id');

                        // Clone the contacts
                        const contacts = _.cloneDeep(this._contacts);

                        // Find the contact
                        const contact = contacts.find((item) => {
                            return item.id === id;
                        });

                        return [
                            200,
                            contact
                        ];
                    });

                // -----------------------------------------------------------------------------------------------------
                // @ Contact - PUT
                // -----------------------------------------------------------------------------------------------------
                this._asmMockApiService
                    .onPut('api/apps/contacts/contact')
                    .reply(() => {

                        // Generate a new contact
                        const newContact = {
                            id          : AsmMockApiUtils.guid(),
                            avatar      : null,
                            name        : 'New Contact',
                            emails      : [],
                            phoneNumbers: [],
                            job         : {
                                title  : '',
                                company: ''
                            },
                            birthday    : null,
                            address     : null,
                            notes       : null,
                            tags        : []
                        };

                        // Unshift the new contact
                        this._contacts.unshift(newContact);

                        return [
                            200,
                            newContact
                        ];
                    });

                // -----------------------------------------------------------------------------------------------------
                // @ Contact - PATCH
                // -----------------------------------------------------------------------------------------------------
                this._asmMockApiService
                    .onPatch('api/apps/contacts/contact')
                    .reply((request) => {

                        // Get the id and contact
                        const id = request.body.id;
                        const contact = _.cloneDeep(request.body.contact);

                        // Prepare the updated contact
                        let updatedContact = null;

                        // Find the contact and update it
                        this._contacts.forEach((item, index, contacts) => {

                            if ( item.id === id )
                            {
                                // Update the contact
                                contacts[index] = _.assign({}, contacts[index], contact);

                                // Store the updated contact
                                updatedContact = contacts[index];
                            }
                        });

                        return [
                            200,
                            updatedContact
                        ];
                    });

                // -----------------------------------------------------------------------------------------------------
                // @ Contact - DELETE
                // -----------------------------------------------------------------------------------------------------
                this._asmMockApiService
                    .onDelete('api/apps/contacts/contact')
                    .reply((request) => {

                        // Get the id
                        const id = request.params.get('id');

                        // Find the contact and delete it
                        this._contacts.forEach((item, index) => {

                            if ( item.id === id )
                            {
                                this._contacts.splice(index, 1);
                            }
                        });

                        return [
                            200,
                            true
                        ];
                    });
                    */

        // -----------------------------------------------------------------------------------------------------
        // @ Tags - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/ecommerce/inventory/tags')
            .reply(() => {

                return [
                    200,
                    _.cloneDeep(this._tags)
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Tags - PUT
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onPut('api/apps/ecommerce/inventory/tag')
            .reply((request) => {

                // Get the tag
                const newTag = _.cloneDeep(request.body.tag);

                // Generate a new GUID
                newTag.id = AsmMockApiUtils.guid();

                // Unshift the new tag
                this._tags.unshift(newTag);

                return [
                    200,
                    newTag
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Tags - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onPatch('api/apps/ecommerce/inventory/tag')
            .reply((request) => {

                // Get the id and tag
                const id = request.body.id;
                const tag = _.cloneDeep(request.body.tag);

                // Prepare the updated tag
                let updatedTag = null;

                // Find the tag and update it
                this._tags.forEach((item, index, tags) => {

                    if ( item.id === id )
                    {
                        // Update the tag
                        tags[index] = _.assign({}, tags[index], tag);

                        // Store the updated tag
                        updatedTag = tags[index];
                    }
                });

                return [
                    200,
                    updatedTag
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Tag - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onDelete('api/apps/ecommerce/inventory/tag')
            .reply((request) => {

                // Get the id
                const id = request.params.get('id');

                // Find the tag and delete it
                this._tags.forEach((item, index) => {

                    if ( item.id === id )
                    {
                        this._tags.splice(index, 1);
                    }
                });

                // Get the products that have the tag
                const productsWithTag = this._products.filter(product => product.tags.indexOf(id) > -1);

                // Iterate through them and delete the tag
                productsWithTag.forEach((product) => {
                    product.tags.splice(product.tags.indexOf(id), 1);
                });

                return [
                    200,
                    true
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Vendors - GET
        // -----------------------------------------------------------------------------------------------------
        this._asmMockApiService
            .onGet('api/apps/ecommerce/inventory/vendors')
            .reply(() => {

                return [
                    200,
                    _.cloneDeep(this._brands)
                ];
            });

        /*
        // -----------------------------------------------------------------------------------------------------
        // @ Avatar - POST
        // -----------------------------------------------------------------------------------------------------

        /!**
         * Read the given file as data url
         *
         * @param file
         *!/
        const readAsDataURL = (file: File): Promise<any> => {

            // Return a new promise
            return new Promise((resolve, reject) => {

                // Create a new reader
                const reader = new FileReader();

                // Resolve the promise on success
                reader.onload = () => {
                    resolve(reader.result);
                };

                // Reject the promise on error
                reader.onerror = (e) => {
                    reject(e);
                };

                // Read the file as the
                reader.readAsDataURL(file);
            });
        };

        this._asmMockApiService
            .onPost('api/apps/contacts/avatar')
            .reply((request) => {

                // Get the id and avatar
                const id = request.body.id;
                const avatar = request.body.avatar;

                // Prepare the updated contact
                let updatedContact = null;

                // In a real world application, this would return the path
                // of the saved image file (from host, S3 bucket, etc.) but,
                // for the sake of the demo, we encode the image to base64
                // and return it as the new path of the uploaded image since
                // the src attribute of the img tag works with both image urls
                // and encoded images.
                return from(readAsDataURL(avatar)).pipe(
                    map((path) => {

                        // Find the contact and update it
                        this._contacts.forEach((item, index, contacts) => {

                            if ( item.id === id )
                            {
                                // Update the avatar
                                contacts[index].avatar = path;

                                // Store the updated contact
                                updatedContact = contacts[index];
                            }
                        });

                        return [200, updatedContact];
                    })
                );
            });*/
    }
}
