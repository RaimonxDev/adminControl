import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDrawer } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AsmLookUpByPipe, AsmMediaWatcherService } from '@assembly';
import { Tag, Task, TasksCount } from 'app/modules/admin/apps/tasks/tasks.type';
import { TasksService } from 'app/modules/admin/apps/tasks/tasks.service';

@Component({
    selector     : 'tasks-list',
    templateUrl  : './list.component.html',
    styleUrls    : ['./list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TasksListComponent implements OnInit, OnDestroy
{
    @ViewChild('matDrawer', {static: true})
    matDrawer: MatDrawer;

    filteredTasks: Task[];
    drawerMode: 'side' | 'over';
    selectedTask: Task;
    tags: Tag[];
    tasks: Task[];
    tasksCount: TasksCount;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     * @param {AsmMediaWatcherService} _asmMediaWatcherService
     * @param {Router} _router
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
                this.filteredTasks = tasks;
                this.tasks = tasks;
            });

        // Get the task
        this._tasksService.task$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((task) => {
                this.selectedTask = task;
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
     * Toggle the completed status
     * of the given task
     *
     * @param task
     */
    toggleCompleted(task): void
    {
        // Toggle the completed status
        task.completed = !task.completed;

        // Update the task on the server
        this._tasksService.updateTask(task.id, task).subscribe();
    }

    /**
     * Task dropped
     *
     * @param event
     */
    dropped(event: CdkDragDrop<Task[]>): void
    {
        // Move the item in the array
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

        // Save the new order
        this._tasksService.updateTasksOrders(event.container.data).subscribe();
    }

    /**
     * On search
     *
     * @param event
     */
    onSearch(event): void
    {
        const term = event.target.value;

        // Reset the search if the term is empty
        if ( !term )
        {
            this.filteredTasks = this.tasks;
            return;
        }

        // Filter the results
        this.filteredTasks = this.tasks.filter((task) => {
            return (task.title && task.title.toLowerCase().includes(term.toLowerCase())) || (task.notes && task.notes.toLowerCase().includes(term.toLowerCase()));
        });
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
