import { Component, Inject, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { fromEvent, Observable, Subject } from 'rxjs';
import { filter, switchMap, takeUntil } from 'rxjs/operators';
import { AsmLookUpByPipe, AsmMediaWatcherService } from '@assembly';
import { Contact, Country, Tag } from 'app/modules/admin/apps/contacts/contacts.type';
import { ContactsService } from 'app/modules/admin/apps/contacts/contacts.service';

@Component({
    selector     : 'contacts-list',
    templateUrl  : './list.component.html',
    styleUrls    : ['./list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ContactsListComponent implements OnInit, OnDestroy
{
    contacts$: Observable<Contact[]>;
    contactsCount: number;
    contactsTableColumns: string[];
    countries: Country[];
    drawerMode: 'side' | 'over';
    searchInputControl: FormControl;
    selectedContact: Contact;
    tags: Tag[];

    @ViewChild('matDrawer', {static: true})
    matDrawer: MatDrawer;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     * @param {AsmMediaWatcherService} _asmMediaWatcherService
     * @param {ContactsService} _contactsService
     * @param {DOCUMENT} _document
     * @param {Router} _router
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _asmMediaWatcherService: AsmMediaWatcherService,
        @Inject(DOCUMENT) private _document: any,
        private _router: Router,
        private _contactsService: ContactsService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.contactsCount = 0;
        this.contactsTableColumns = ['name', 'email', 'phoneNumber', 'job', 'tags'];
        this.searchInputControl = new FormControl();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the tags
        this._contactsService.tags$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((tags) => {
                this.tags = tags;
            });

        // Get the contacts
        this.contacts$ = this._contactsService.contacts$;
        this._contactsService.contacts$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((contacts) => {

                // Update the counts
                this.contactsCount = contacts.length;
            });

        // Get the contact
        this._contactsService.contact$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((contact) => {

                // Update the selected contact
                this.selectedContact = contact;
            });

        // Get the countries
        this._contactsService.countries$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((countries) => {

                // Update the countries
                this.countries = countries;
            });

        // Subscribe to search input field value changes
        this.searchInputControl.valueChanges
            .pipe(
                takeUntil(this._unsubscribeAll),
                switchMap((query) => {

                    // Search
                    return this._contactsService.searchContacts(query);
                })
            )
            .subscribe();

        // Subscribe to media query change
        this._asmMediaWatcherService.onMediaQueryChange$('(min-width: 1440px)')
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((matches) => {

                // Calculate the drawer mode
                this.drawerMode = matches ? 'side' : 'over';
            });

        // Listen for shortcuts
        fromEvent(this._document, 'keydown')
            .pipe(
                takeUntil(this._unsubscribeAll),
                filter<KeyboardEvent>((event) => {
                    return (event.ctrlKey === true || event.metaKey) // Ctrl or Cmd
                        && (event.key === '/'); // '/'
                })
            )
            .subscribe(() => {
                this.createContact();
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Go to contact
     *
     * @param id
     */
    goToContact(id: string): void
    {
        // Get the current activated route
        let route = this._activatedRoute;
        while ( route.firstChild )
        {
            route = route.firstChild;
        }

        // Go to contact
        this._router.navigate(['../', id], {relativeTo: route});
    }

    /**
     * On backdrop clicked
     */
    onBackdropClicked(): void
    {
        // Get the current activated route
        let route = this._activatedRoute;
        while ( route.firstChild )
        {
            route = route.firstChild;
        }

        // Go to the parent route
        this._router.navigate(['../'], {relativeTo: route});
    }

    /**
     * Create contact
     *
     * @param type
     */
    createContact(): void
    {
        // Create the contact
        this._contactsService.createContact().subscribe((newContact) => {

            // Go to new contact
            this.goToContact(newContact.id);
        });
    }

    /**
     * Get country code
     *
     * @param iso
     */
    getCountryCode(iso): string
    {
        if ( !iso )
        {
            return '';
        }

        return this.countries.find((country) => country.iso === iso).code;
    }

    /**
     * Organize the tags
     *
     * @param tags
     */
    organizeTags(tags): any
    {
        // Get the visible and hidden tags
        let visible = tags.slice(0, 1);
        let hidden = tags.slice(1, tags.length);

        // If there are visible tags...
        if ( visible.length > 0 )
        {
            // Convert them into tag objects
            visible = new AsmLookUpByPipe().transform(visible, 'id', this.tags);
        }

        // If there are hidden tags...
        if ( hidden.length > 0 )
        {
            // Convert them into tag objects
            hidden = new AsmLookUpByPipe().transform(hidden, 'id', this.tags);

            // Convert it to the tag titles array
            hidden.forEach((item, index, items) => {
                items[index] = item.title.toUpperCase();
            });

            // Join them together
            hidden = hidden.join(', ');
        }
        else
        {
            hidden = false;
        }

        return {
            visible,
            hidden
        };
    }

    /**
     * Track by function for ngFor loops
     *
     * @param item
     */
    trackById(item): string
    {
        return item.id;
    }
}