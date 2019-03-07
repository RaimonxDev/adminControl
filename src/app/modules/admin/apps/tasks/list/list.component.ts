import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDrawer } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AsmLookUpByPipe, AsmMediaWatcherService } from '@assembly';
import { TasksService } from 'app/modules/admin/apps/tasks/tasks.service';

@Component({
    selector   : 'tasks-list',
    templateUrl: './list.component.html',
    styleUrls  : ['./list.component.scss']
})
export class TasksListComponent implements OnInit, OnDestroy
{
    @ViewChild('drawer')
    drawer: MatDrawer;

    drawerMode: 'side' | 'over';
    tags: any;
    tasks: any[];
    tasksCount: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AsmMediaWatcherService} _asmMediaWatcherService
     * @param {TasksService} _tasksService
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _asmMediaWatcherService: AsmMediaWatcherService,
        private _router: Router,
        private _tasksService: TasksService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
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
        this._tasksService.tags$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((tags) => {
                this.tags = tags;
            });

        // Get the tasks
        this._tasksService.tasks$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((tasks) => {
                this.tasks = tasks;
            });

        // Get the tasks count
        this._tasksService.tasksCount$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((tasksCount) => {
                this.tasksCount = tasksCount;
            });

        // Subscribe to media changes
        this._asmMediaWatcherService.onMediaChange
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {

                // Calculate the drawer mode
                this.drawerMode = this._asmMediaWatcherService.isActive('gt-md') ? 'side' : 'over';
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
     * Track by function for ngFor loops
     *
     * @param item
     * @param index
     */
    trackById(item, index): number
    {
        return index;
    }

    /**
     * Organize the tags
     *
     * @param tags
     */
    organizeTags(tags): any
    {
        /*console.log(tags.splice(0, 2));
        console.log(tags);*/

        // Get the visible and hidden tags
        let visible = tags.slice(0, 2);
        let hidden = tags.slice(2, tags.length);

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
}
