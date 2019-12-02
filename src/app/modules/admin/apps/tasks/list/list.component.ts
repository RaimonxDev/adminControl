import { Component, Inject, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDrawer } from '@angular/material/sidenav';
import { fromEvent, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AsmMediaWatcherService, AsmNavigationService } from '@assembly';
import { Tag, Task } from 'app/modules/admin/apps/tasks/tasks.type';
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

    drawerMode: 'side' | 'over';
    selectedTask: Task;
    tags: Tag[];
    tasks: Task[];
    tasksCount: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     * @param {AsmMediaWatcherService} _asmMediaWatcherService
     * @param {AsmNavigationService} _asmNavigationService
     * @param {DOCUMENT} _document
     * @param {Router} _router
     * @param {TasksService} _tasksService
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _asmMediaWatcherService: AsmMediaWatcherService,
        private _asmNavigationService: AsmNavigationService,
        @Inject(DOCUMENT) private _document: any,
        private _router: Router,
        private _tasksService: TasksService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.tasksCount = {
            completed : 0,
            incomplete: 0,
            total     : 0
        };
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

                // Update the counts
                this.tasksCount.total = this.tasks.filter(task => task.type === 'task').length;
                this.tasksCount.completed = this.tasks.filter(task => task.type === 'task' && task.completed).length;
                this.tasksCount.incomplete = this.tasksCount.total - this.tasksCount.completed;

                // Update the count on the navigation
                setTimeout(() => {

                    // Get the component -> navigation data -> item
                    const mainNavigation = this._asmNavigationService.getComponent('mainNavigation').data;
                    const menuItem = this._asmNavigationService.getItem('applications.tasks', mainNavigation);

                    // Update the subtitle of the item
                    menuItem.subtitle = this.tasksCount.incomplete + ' remaining tasks';

                    // Refresh the navigation
                    this._asmNavigationService.refreshNavigation('mainNavigation');
                });
            });

        // Get the task
        this._tasksService.task$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((task) => {
                this.selectedTask = task;
            });

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
                        && (event.key === '/' || event.key === '.'); // '/' or '.' key
                })
            )
            .subscribe((event: KeyboardEvent) => {

                // If the '/' pressed
                if ( event.key === '/' )
                {
                    this.createTask('task');
                }

                // If the '.' pressed
                if ( event.key === '.' )
                {
                    this.createTask('section');
                }
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
     * Go to task
     *
     * @param id
     */
    goToTask(id: string): void
    {
        // Get the current activated route
        let route = this._activatedRoute;
        while ( route.firstChild )
        {
            route = route.firstChild;
        }

        // Go to task
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
     * Create task
     *
     * @param type
     */
    createTask(type: 'task' | 'section'): void
    {
        // Create the task
        this._tasksService.createTask(type).subscribe((newTask) => {

            // Go to new task
            this.goToTask(newTask.id);
        });
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
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackById(index, item): number
    {
        return item.id || index;
    }
}
