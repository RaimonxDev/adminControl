import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDrawerToggleResult } from '@angular/material';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';
import * as _ from 'lodash';
import { TasksListComponent } from 'app/modules/apps/tasks/list/list.component';
import { TasksService } from 'app/modules/apps/tasks/tasks.service';

@Component({
    selector       : 'tasks-details',
    templateUrl    : './details.component.html',
    styleUrls      : ['./details.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksDetailsComponent implements OnInit, OnDestroy
{
    tags: any;
    task: any;
    taskForm: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;
    private _taskFormValueChangesSubscription: Subscription | null;

    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     * @param {FormBuilder} _formBuilder
     * @param {Router} _router
     * @param {TasksListComponent} _tasksListComponent
     * @param {TasksService} _tasksService
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _formBuilder: FormBuilder,
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

        // Create the task form
        this.taskForm = this._formBuilder.group({
            id         : [''],
            type       : [''],
            title      : [''],
            description: [''],
            completed  : [false],
            dueDate    : [''],
            priority   : [0],
            tags       : this._formBuilder.array([]),
            assignedTo : this._formBuilder.array([]),
            subTasks   : this._formBuilder.array([]),
            order      : [0]
        });

        // Get the tags
        this._tasksService.tags$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((tags) => {
                this.tags = tags;
            });

        // Get the task
        this._tasksService.task$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((task) => {

                // Unsubscribe from the form value changes subscription
                // before starting to filling up the form
                if ( this._taskFormValueChangesSubscription )
                {
                    this._taskFormValueChangesSubscription.unsubscribe();
                    this._taskFormValueChangesSubscription = null;
                }

                // Get the task
                this.task = task;

                // Patch values to the form
                this.taskForm.patchValue(task);

                // Manually fill the tags and assigned to arrays
                this.taskForm.setControl('tags', this._formBuilder.array(this.task.tags || []));
                this.taskForm.setControl('assignedTo', this._formBuilder.array(this.task.assignedTo || []));

                // Manually fill the sub tasks
                const subTasksFormArray = <FormArray>this.taskForm.get('subTasks');
                while ( subTasksFormArray.length )
                {
                    subTasksFormArray.removeAt(0);
                }

                this.task.subTasks.forEach((subTask) => {

                    // Create a sub task form group
                    const subTaskFormGroup = this._formBuilder.group({
                        id       : [subTask.id],
                        title    : [subTask.title, Validators.required],
                        completed: [subTask.completed]
                    });

                    // Add the sub task form group to the sub tasks form array
                    (<FormArray>this.taskForm.get('subTasks')).push(subTaskFormGroup);
                });

                // Update task when there is a value change
                this._taskFormValueChangesSubscription =
                    this.taskForm.valueChanges
                        .pipe(
                            tap((value) => {

                                // Update the task object
                                this.task = _.assign(this.task, value);
                            }),
                            debounceTime(500),
                            takeUntil(this._unsubscribeAll)
                        )
                        .subscribe((value) => {

                            // Update the task on the server
                            this._tasksService.updateTask(value.id, value).subscribe();
                        });
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
    closeDrawer(): Promise<MatDrawerToggleResult>
    {
        return this._tasksListComponent.drawer.close();
    }

    /**
     * Toggle the completed status
     */
    toggleCompleted(): void
    {
        // Get the completed form control
        const completedFormControl = this.taskForm.get('completed');

        // Toggle the completed status
        completedFormControl.setValue(!completedFormControl.value);
    }

    /**
     * Toggle tag
     *
     * @param tag
     */
    toggleTag(tag): void
    {
        // Get the tags form array
        const tagsFormArray = <FormArray>this.taskForm.get('tags');

        // Update the tags
        if ( tagsFormArray.value.includes(tag.id) )
        {
            // Remove the tag
            tagsFormArray.removeAt(tagsFormArray.value.findIndex((item) => item === tag.id));
        }
        else
        {
            // Add the tag
            tagsFormArray.push(this._formBuilder.control(tag.id));
        }

        // Update the task on the server
        this._tasksService.updateTask(this.task.id, {tags: this.task.tags}).subscribe();
    }
}
