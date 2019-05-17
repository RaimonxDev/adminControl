import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AsmVerticalMenuItem } from '@assembly';
import { MailboxService } from 'app/modules/admin/apps/mailbox/mailbox.service';

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
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {MailboxService} _mailboxService
     */
    constructor(
        private _mailboxService: MailboxService
    )
    {
        // Set the private defaults
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
            });

        // Folders
        this._mailboxService.folders$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((folders) => {
                this.folders = folders;
            });

        // Labels
        this._mailboxService.labels$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((labels) => {
                this.labels = labels;
            });

        // Generate menu links
        this._generateMenu();
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
     * Generate the menu data
     *
     * @private
     */
    private _generateMenu(): void
    {
        // Generate menus for folders
        this.folders.forEach((folder) => {

            this.menuData.push({
                title: folder.title,
                type : 'basic',
                icon : folder.icon,
                link : '/apps/mailbox/' + folder.slug
            });
        });

        // Generate menus for filters
        this.filters.forEach((filter) => {

            this.menuData.push({
                title: filter.title,
                type : 'basic',
                icon : filter.icon,
                link : '/apps/mailbox/filter/' + filter.slug
            });
        });

        // Generate menus for labels
        this.labels.forEach((label) => {

            this.menuData.push({
                title         : label.title,
                type          : 'basic',
                icon          : 'label',
                iconClassNames: 'text-' + label.color,
                link          : '/apps/mailbox/label/' + label.slug
            });
        });

        // Add settings menu
        this.menuData.push({
            title: 'Settings',
            type : 'basic',
            icon : 'settings',
            link : '/apps/mailbox/settings'
        });
    }

}
