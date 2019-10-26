import { Component, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemplatePortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDrawerToggleResult } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Contact, Country, Tag } from 'app/modules/admin/apps/contacts/contacts.type';
import { ContactsListComponent } from 'app/modules/admin/apps/contacts/list/list.component';
import { ContactsService } from 'app/modules/admin/apps/contacts/contacts.service';

@Component({
    selector     : 'contacts-details',
    templateUrl  : './details.component.html',
    styleUrls    : ['./details.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ContactsDetailsComponent implements OnInit, OnDestroy
{
    editMode: boolean;
    tags: Tag[];
    tagsEditMode: boolean;
    filteredTags: Tag[];
    contact: Contact;
    contactForm: FormGroup;
    contacts: Contact[];
    countries: Country[];

    // Private
    private _tagsPanelOverlayRef: OverlayRef;
    private _unsubscribeAll: Subject<any>;

    @ViewChild('avatar', {static: false})
    private _avatar: ElementRef;

    @ViewChild('notes', {
        static: false,
        read  : CdkTextareaAutosize
    })
    private _notesCdkTextareaAutosize: CdkTextareaAutosize;

    @ViewChild('tagsPanel', {static: false})
    private _tagsPanel: TemplateRef<any>;

    @ViewChild('tagsPanelOrigin', {static: false})
    private _tagsPanelOrigin: ElementRef;

    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     * @param {ContactsListComponent} _contactsListComponent
     * @param {ContactsService} _contactsService
     * @param {FormBuilder} _formBuilder
     * @param {Renderer} _renderer2
     * @param {Router} _router
     * @param {Overlay} _overlay
     * @param {ViewContainerRef} _viewContainerRef
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _contactsListComponent: ContactsListComponent,
        private _contactsService: ContactsService,
        private _formBuilder: FormBuilder,
        private _renderer2: Renderer2,
        private _router: Router,
        private _overlay: Overlay,
        private _viewContainerRef: ViewContainerRef
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.editMode = false;
        this.tagsEditMode = false;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Open the drawer
        this._contactsListComponent.matDrawer.open();

        // Create the contact form
        this.contactForm = this._formBuilder.group({
            id          : [''],
            avatar      : [null],
            name        : ['', [Validators.required]],
            emails      : this._formBuilder.array([]),
            phoneNumbers: this._formBuilder.array([]),
            job         : this._formBuilder.group({
                title  : [''],
                company: ['']
            }),
            birthday    : [null],
            address     : [null],
            notes       : [null],
            tags        : [[]]
        });

        // Get the contacts
        this._contactsService.contacts$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((contacts) => {
                this.contacts = contacts;
            });

        // Get the contact
        this._contactsService.contact$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((contact) => {

                // Get the contact
                this.contact = contact;

                // Clear the emails and phoneNumbers form arrays
                (this.contactForm.get('emails') as FormArray).clear();
                (this.contactForm.get('phoneNumbers') as FormArray).clear();

                // Patch values to the form
                this.contactForm.patchValue(contact);

                // Setup the emails form array
                const emailFormGroups = [];

                if ( contact.emails.length > 0 )
                {
                    // Iterate through them
                    contact.emails.forEach((email) => {

                        // Create an email form group
                        emailFormGroups.push(
                            this._formBuilder.group({
                                email: [email.email],
                                label: [email.label]
                            })
                        );
                    });
                }
                else
                {
                    // Create an email form group
                    emailFormGroups.push(
                        this._formBuilder.group({
                            email: [''],
                            label: ['']
                        })
                    );
                }

                // Add the email form groups to the emails form array
                emailFormGroups.forEach((emailFormGroup) => {
                    (this.contactForm.get('emails') as FormArray).push(emailFormGroup);
                });

                // Setup the phone numbers form array
                const phoneNumbersFormGroups = [];

                if ( contact.phoneNumbers.length > 0 )
                {
                    // Iterate through them
                    contact.phoneNumbers.forEach((phoneNumber) => {

                        // Create an email form group
                        phoneNumbersFormGroups.push(
                            this._formBuilder.group({
                                country: [phoneNumber.country],
                                number : [phoneNumber.number],
                                label  : [phoneNumber.label]
                            })
                        );
                    });
                }
                else
                {
                    // Create a phone number form group
                    phoneNumbersFormGroups.push(
                        this._formBuilder.group({
                            country: ['us'],
                            number : [''],
                            label  : ['']
                        })
                    );
                }

                // Add the phone numbers form groups to the phone numbers form array
                phoneNumbersFormGroups.forEach((phoneNumbersFormGroup) => {
                    (this.contactForm.get('phoneNumbers') as FormArray).push(phoneNumbersFormGroup);
                });

                // HACK - Go into the edit mode if the contact name equals to 'New Contact'
                // FIXME: Separate the edit mode using the '/edit' route
                if ( contact.name === 'New Contact' )
                {
                    this.toggleEditMode();
                }
            });

        // Get the country telephone codes
        this._contactsService.countries$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((codes) => {
                this.countries = codes;
            });

        // Get the tags
        this._contactsService.tags$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((tags) => {
                this.tags = tags;
                this.filteredTags = tags;
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

        // Dispose the overlays if they are still on the DOM
        if ( this._tagsPanelOverlayRef )
        {
            this._tagsPanelOverlayRef.dispose();
        }

        // Reset the selected contact
        this._contactsService.resetSelectedContact();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Close the drawer
     */
    closeDrawer(): Promise<MatDrawerToggleResult>
    {
        return this._contactsListComponent.matDrawer.close();
    }

    /**
     * Toggle edit mode
     */
    toggleEditMode(): void
    {
        this.editMode = !this.editMode;

        // Force resize the text area
        setTimeout(() => {
            if ( this._notesCdkTextareaAutosize )
            {
                this._notesCdkTextareaAutosize.resizeToFitContent(true);
            }
        });
    }

    /**
     * Update the contact
     */
    updateContact(): void
    {
        // Get the contact object
        const contact = this.contactForm.getRawValue();

        // Go through the contact object and clear empty values
        contact.emails = contact.emails.filter((email) => {
            return email.email;
        });

        contact.phoneNumbers = contact.phoneNumbers.filter((phoneNumber) => {
            return phoneNumber.number;
        });

        // Update the contact on the server
        this._contactsService.updateContact(contact.id, contact).subscribe(() => {

            // Toggle the edit mode off
            this.toggleEditMode();
        });
    }

    /**
     * Delete the contact
     */
    deleteContact(): void
    {
        // Get the current contact's id
        const id = this.contact.id;

        // Get the next/previous contact's id
        const currentContactIndex = this.contacts.findIndex(item => item.id === id);
        const nextContactIndex = currentContactIndex + ((currentContactIndex === (this.contacts.length - 1)) ? -1 : 1);
        const nextContactId = (this.contacts.length === 1 && this.contacts[0].id === id) ? null : this.contacts[nextContactIndex].id;

        // Delete the contact
        this._contactsService.deleteContact(id)
            .subscribe((isDeleted) => {

                // Return if the contact wasn't deleted...
                if ( !isDeleted )
                {
                    return;
                }

                // Get the current activated route
                let route = this._activatedRoute;
                while ( route.firstChild )
                {
                    route = route.firstChild;
                }

                // Navigate to the next contact if available
                if ( nextContactId )
                {
                    this._router.navigate(['../', nextContactId], {relativeTo: route});
                }
                // Otherwise, navigate to the parent
                else
                {
                    this._router.navigate(['../'], {relativeTo: route});
                }
            });
    }

    /**
     * Upload avatar
     *
     * @param files
     */
    uploadAvatar(files: FileList): void
    {
        // Return if canceled
        if ( !files.length )
        {
            return;
        }

        const allowedTypes = ['image/jpeg', 'image/png'];
        const file = files[0];

        // Return if the file is not allowed
        if ( !allowedTypes.includes(file.type) )
        {
            return;
        }

        // Upload the avatar
        this._contactsService.uploadAvatar(this.contact.id, file).subscribe();
    }

    /**
     * Remove the avatar
     */
    removeAvatar(): void
    {
        // Get the form control for 'avatar'
        const avatarFormControl = this.contactForm.get('avatar');

        // Set the avatar as null
        avatarFormControl.setValue(null);

        // Update the contact
        this.contact.avatar = null;
    }

    /**
     * Open tags panel
     */
    openTagsPanel(): void
    {
        // Create the overlay
        this._tagsPanelOverlayRef = this._overlay.create({
            backdropClass   : '',
            hasBackdrop     : true,
            scrollStrategy  : this._overlay.scrollStrategies.block(),
            positionStrategy: this._overlay.position()
                                  .flexibleConnectedTo(this._tagsPanelOrigin.nativeElement)
                                  .withFlexibleDimensions()
                                  .withViewportMargin(64)
                                  .withLockedPosition()
                                  .withPositions([
                                      {
                                          originX : 'start',
                                          originY : 'bottom',
                                          overlayX: 'start',
                                          overlayY: 'top'
                                      }
                                  ])
        });

        // Subscribe to the attachments observable
        this._tagsPanelOverlayRef.attachments().subscribe(() => {

            // Add a class to the origin
            this._renderer2.addClass(this._tagsPanelOrigin.nativeElement, 'panel-opened');

            // Focus to the search input once the overlay has been attached
            this._tagsPanelOverlayRef.overlayElement.querySelector('input').focus();
        });

        // Create a portal from the template
        const templatePortal = new TemplatePortal(this._tagsPanel, this._viewContainerRef);

        // Attach the portal to the overlay
        this._tagsPanelOverlayRef.attach(templatePortal);

        // Subscribe to the backdrop click
        this._tagsPanelOverlayRef.backdropClick().subscribe(() => {

            // Remove the class from the origin
            this._renderer2.removeClass(this._tagsPanelOrigin.nativeElement, 'panel-opened');

            // If overlay exists and attached...
            if ( this._tagsPanelOverlayRef && this._tagsPanelOverlayRef.hasAttached() )
            {
                // Detach it
                this._tagsPanelOverlayRef.detach();

                // Reset the tag filter
                this.filteredTags = this.tags;

                // Toggle the edit mode off
                this.tagsEditMode = false;
            }

            // If template portal exists and attached...
            if ( templatePortal && templatePortal.isAttached )
            {
                // Detach it
                templatePortal.detach();
            }
        });
    }

    /**
     * Toggle the tags edit mode
     */
    toggleTagsEditMode(): void
    {
        this.tagsEditMode = !this.tagsEditMode;
    }

    /**
     * Filter tags
     *
     * @param event
     */
    filterTags(event): void
    {
        // Get the value
        const value = event.target.value.toLowerCase();

        // Filter the tags
        this.filteredTags = this.tags.filter(tag => tag.title.toLowerCase().includes(value));
    }

    /**
     * Filter tags input key down event
     *
     * @param event
     */
    filterTagsInputKeyDown(event): void
    {
        // Return, if the pressed key is not 'Enter'
        if ( event.key !== 'Enter' )
        {
            return;
        }

        // If there is no tag available...
        if ( this.filteredTags.length === 0 )
        {
            // Create the tag
            this.createTag(event.target.value);

            // Clear the input
            event.target.value = '';

            // Return
            return;
        }

        // If there is a tag...
        const tag = this.filteredTags[0];
        const isTagApplied = this.contact.tags.find((id) => id === tag.id);

        // If the found tag is already applied to the contact...
        if ( isTagApplied )
        {
            // Remove the tag from the contact
            this.removeTagFromContact(tag);
        }
        else
        {
            // Otherwise add the tag to the contact
            this.addTagToContact(tag);
        }
    }

    /**
     * Create a new tag
     *
     * @param title
     */
    createTag(title): void
    {
        const tag = {
            title
        };

        // Create tag on the server
        this._contactsService.createTag(tag)
            .subscribe((response) => {

                // Add the tag to the contact
                this.addTagToContact(response);
            });
    }

    /**
     * Update the tag title
     *
     * @param tag
     * @param event
     */
    updateTagTitle(tag, event): void
    {
        // Update the title on the tag
        tag.title = event.target.value;

        // Update the tag on the server
        this._contactsService.updateTag(tag.id, tag)
            .pipe(debounceTime(300))
            .subscribe();
    }

    /**
     * Delete the tag
     *
     * @param tag
     */
    deleteTag(tag): void
    {
        // Delete the tag from the server
        this._contactsService.deleteTag(tag.id)
            .subscribe();
    }

    /**
     * Add tag to the contact
     *
     * @param tag
     */
    addTagToContact(tag): void
    {
        // Add the tag
        this.contact.tags.unshift(tag.id);

        // Update the contact form
        this.contactForm.get('tags').patchValue(this.contact.tags);
    }

    /**
     * Remove tag from the contact
     *
     * @param tag
     */
    removeTagFromContact(tag): void
    {
        // Remove the tag
        this.contact.tags.splice(this.contact.tags.findIndex(item => item === tag.id), 1);

        // Update the contact form
        this.contactForm.get('tags').patchValue(this.contact.tags);
    }

    /**
     * Toggle contact tag
     *
     * @param tag
     * @param change
     */
    toggleContactTag(tag, change: MatCheckboxChange): void
    {
        if ( change.checked )
        {
            this.addTagToContact(tag);
        }
        else
        {
            this.removeTagFromContact(tag);
        }
    }

    /**
     * Should the create tag button be visible
     *
     * @param inputValue
     */
    shouldShowCreateTagButton(inputValue): boolean
    {
        return !!!(inputValue === '' || this.tags.findIndex(tag => tag.title.toLowerCase() === inputValue.toLowerCase()) > -1);
    }

    /**
     * Add the email field
     */
    addEmailField(): void
    {
        // Create an empty email form group
        const emailFormGroup = this._formBuilder.group({
            email: [''],
            label: ['']
        });

        // Add the email form group to the emails form array
        (this.contactForm.get('emails') as FormArray).push(emailFormGroup);
    }

    /**
     * Remove the email field
     *
     * @param index
     */
    removeEmailField(index): void
    {
        // Get form array for emails
        const emailsFormArray = this.contactForm.get('emails') as FormArray;

        // If it's the last field, empty it rather than removing it
        if ( index === 0 )
        {
            emailsFormArray.at(index).patchValue({
                email: '',
                label: ''
            });

            return;
        }

        // Remove the email field
        emailsFormArray.removeAt(index);
    }

    /**
     * Add an empty phone number field
     */
    addPhoneNumberField(): void
    {
        // Create an empty phone number form group
        const phoneNumberFormGroup = this._formBuilder.group({
            country: ['us'],
            number : [''],
            label  : ['']
        });

        // Add the phone number form group to the phoneNumbers form array
        (this.contactForm.get('phoneNumbers') as FormArray).push(phoneNumberFormGroup);
    }

    /**
     * Remove the phone number field
     *
     * @param index
     */
    removePhoneNumberField(index): void
    {
        // Get form array for phone numbers
        const phoneNumbersFormArray = this.contactForm.get('phoneNumbers') as FormArray;

        // If it's the last field, empty it rather than removing it
        if ( index === 0 )
        {
            phoneNumbersFormArray.at(index).patchValue({
                country: 'us',
                number : '',
                label  : ''
            });

            return;
        }

        // Remove the phone number field
        phoneNumbersFormArray.removeAt(index);
    }

    /**
     * Get country info by iso code
     *
     * @param iso
     */
    getCountryByIso(iso): Country
    {
        return this.countries.find((country) => country.iso === iso);
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
