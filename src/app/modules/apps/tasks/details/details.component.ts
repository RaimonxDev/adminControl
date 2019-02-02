import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { TasksListComponent } from 'app/modules/apps/tasks/list/list.component';
import { TasksService } from 'app/modules/apps/tasks/tasks.service';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector     : 'tasks-details',
    templateUrl  : './details.component.html',
    styleUrls    : ['./details.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TasksDetailsComponent implements OnInit, OnDestroy
{
    task: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     * @param {Router} _router
     * @param {TasksListComponent} _tasksListComponent
     * @param {TasksService} _tasksService
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _tasksListComponent: TasksListComponent,
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
        // Open the drawer
        this._tasksListComponent.drawer.open();

        // Get the tasks
        this._tasksService.task$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((task) => {
                this.task = task;
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
     * Close the drawer
     */
    closeDrawer(): Promise<boolean>
    {
        return this._tasksListComponent.drawer.close().then(() => {
            return new Promise<boolean>((resolve) => {
                resolve(true);
            });
        });
    }
}
