import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AsmVerticalMenuItem } from '@assembly';
import { MailboxService } from 'app/modules/admin/apps/mailbox/mailbox.service';
import { MailboxComposeComponent } from 'app/modules/admin/apps/mailbox/compose/compose.component';

@Component({
    selector     : 'mailbox-sidebar',
    templateUrl  : './sidebar.component.html',
    styleUrls    : ['./sidebar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MailboxSidebarComponent implements OnInit, OnDestroy
{
    filters: any[];
    folders: any[];
    labels: any[];
    menuData: AsmVerticalMenuItem[];

    // Private
    private _filtersMenuData: AsmVerticalMenuItem[];
    private _foldersMenuData: AsmVerticalMenuItem[];
    private _labelsMenuData: AsmVerticalMenuItem[];
    private _otherMenuData: AsmVerticalMenuItem[];
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {MailboxService} _mailboxService
     * @param {MatDialog} _matDialog
     */
    constructor(
        private _mailboxService: MailboxService,
        private _matDialog: MatDialog
    )
    {
        // Set the private defaults
        this._filtersMenuData = [];
        this._foldersMenuData = [];
        this._labelsMenuData = [];
        this._otherMenuData = [];
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.menuData = [];
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Filters
        this._mailboxService.filters$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((filters) => {
                this.filters = filters;

                // Generate menu links
                this._generateFiltersMenuLinks();
            });

        // Folders
        this._mailboxService.folders$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((folders) => {
                this.folders = folders;

                // Generate menu links
                this._generateFoldersMenuLinks();
            });

        // Labels
        this._mailboxService.labels$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((labels) => {
                this.labels = labels;

                // Generate menu links
                this._generateLabelsMenuLinks();
            });

        // Generate other menu links
        this._generateOtherMenuLinks();
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
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Generate menus for folders
     *
     * @private
     */
    private _generateFoldersMenuLinks(): void
    {
        // Reset the folders menu data
        this._foldersMenuData = [];

        // Iterate through the folders
        this.folders.forEach((folder) => {

            // Generate menu item for the folder
            const menuItem: AsmVerticalMenuItem = {
                title: folder.title,
                type : 'basic',
                icon : folder.icon,
                link : '/apps/mailbox/' + folder.slug
            };

            // If the count is available and is bigger than zero...
            if ( folder.count && folder.count > 0 )
            {
                // Add the count as a badge
                menuItem['badge'] = {
                    title: folder.count,
                    color: 'text-secondary',
                    style: 'simple'
                };
            }

            // Push the menu item to the folders menu data
            this._foldersMenuData.push(menuItem);
        });

        // Update the menu data
        this._updateMenuData();
    }

    /**
     * Generate menus for filters
     *
     * @private
     */
    private _generateFiltersMenuLinks(): void
    {
        // Reset the filters menu
        this._filtersMenuData = [];

        // Iterate through the filters
        this.filters.forEach((filter) => {

            // Generate menu item for the filter
            this._filtersMenuData.push({
                title: filter.title,
                type : 'basic',
                icon : filter.icon,
                link : '/apps/mailbox/filter/' + filter.slug
            });
        });

        // Update the menu data
        this._updateMenuData();
    }

    /**
     * Generate menus for labels
     *
     * @private
     */
    private _generateLabelsMenuLinks(): void
    {
        // Reset the labels menu
        this._labelsMenuData = [];

        // Iterate through the labels
        this.labels.forEach((label) => {

            // Generate menu item for the label
            this._labelsMenuData.push({
                title         : label.title,
                type          : 'basic',
                icon          : 'label',
                iconClassNames: 'text-' + label.color,
                link          : '/apps/mailbox/label/' + label.slug
            });
        });

        // Update the menu data
        this._updateMenuData();
    }

    /**
     * Generate other menus
     *
     * @private
     */
    private _generateOtherMenuLinks(): void
    {
        // Settings menu
        this._otherMenuData.push({
            title: 'Settings',
            type : 'basic',
            icon : 'settings',
            link : '/apps/mailbox/settings'
        });

        // Update the menu data
        this._updateMenuData();
    }

    /**
     * Update the menu data
     *
     * @private
     */
    private _updateMenuData(): void
    {
        this.menuData = [
            ...this._foldersMenuData,
            {
                type: 'spacer'
            },
            ...this._filtersMenuData,
            {
                type: 'spacer'
            },
            ...this._labelsMenuData,
            {
                type: 'spacer'
            },
            ...this._otherMenuData
        ];
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Open compose dialog
     */
    openComposeDialog(): void
    {
        // Open the dialog
        const dialogRef = this._matDialog.open(MailboxComposeComponent, {
            panelClass: 'mailbox-compose-dialog'
        });

        dialogRef.afterClosed()
                 .subscribe(result => {
                     console.log('Compose dialog was closed!');
                 });
    }
}
