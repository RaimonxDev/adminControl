import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemplatePortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { MatButton, MatCheckboxChange, MatDrawerToggleResult } from '@angular/material';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';
import * as _ from 'lodash';
import { TasksListComponent } from 'app/modules/admin/apps/tasks/list/list.component';
import { TasksService } from 'app/modules/admin/apps/tasks/tasks.service';
import { tagColors as tagColorsData } from 'app/modules/admin/apps/tasks/details/tag-colors';

@Component({
    selector     : 'tasks-details',
    templateUrl  : './details.component.html',
    styleUrls    : ['./details.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TasksDetailsComponent implements OnInit, OnDestroy
{
    tagColors: string[];
    tags: any[];
    filteredTags: any[];
    task: any;
    taskForm: FormGroup;

    // Private
    private _overlayRef: OverlayRef;
    private _taskFormValueChangesSubscription: Subscription | null;
    private _unsubscribeAll: Subject<any>;

    @ViewChild('addTagPanelOrigin')
    private _addTagPanelOrigin: MatButton;

    @ViewChild('addTagPanel')
    private _addTagPanel: TemplateRef<any>;

    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     * @param {FormBuilder} _formBuilder
     * @param {Router} _router
     * @param {TasksListComponent} _tasksListComponent
     * @param {TasksService} _tasksService
     * @param {Overlay} _overlay
     * @param {ViewContainerRef} _viewContainerRef
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _tasksListComponent: TasksListComponent,
        private _tasksService: TasksService,
        private _overlay: Overlay,
        private _viewContainerRef: ViewContainerRef
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.tagColors = tagColorsData;
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
                this.filteredTags = tags;
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
                const subTasksFormArray = this.taskForm.get('subTasks') as FormArray;
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
                    (this.taskForm.get('subTasks') as FormArray).push(subTaskFormGroup);
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

        // Dispose the overlay if it's still on the DOM
        if ( this._overlayRef )
        {
            this._overlayRef.dispose();
        }
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

    openPanel(): void
    {
        // Create the overlay
        this._overlayRef = this._overlay.create({
            hasBackdrop     : true,
            scrollStrategy  : this._overlay.scrollStrategies.block(),
            positionStrategy: this._overlay.position()
                                  .flexibleConnectedTo(this._addTagPanelOrigin._elementRef.nativeElement)
                                  .withFlexibleDimensions()
                                  .withViewportMargin(64)
                                  .withLockedPosition()
                                  .withPositions([
                                      {
                                          originX : 'start',
                                          originY : 'bottom',
                                          overlayX: 'start',
                                          overlayY: 'top'
                                      },
                                      {
                                          originX : 'start',
                                          originY : 'top',
                                          overlayX: 'start',
                                          overlayY: 'bottom'
                                      },
                                      {
                                          originX : 'end',
                                          originY : 'bottom',
                                          overlayX: 'end',
                                          overlayY: 'top'
                                      },
                                      {
                                          originX : 'end',
                                          originY : 'top',
                                          overlayX: 'end',
                                          overlayY: 'bottom'
                                      }
                                  ])
        });

        // Create a portal from the template
        const templatePortal = new TemplatePortal(this._addTagPanel, this._viewContainerRef);

        // Attach the portal to the overlay
        this._overlayRef.attach(templatePortal);

        // Subscribe to the backdrop click
        this._overlayRef.backdropClick().subscribe(() => {

            // If overlay exists and attached...
            if ( this._overlayRef && this._overlayRef.hasAttached() )
            {
                // Detach it
                this._overlayRef.detach();
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
     * Create new tag
     *
     * @param title
     */
    createTag(title): void
    {
        const tag = {
            title,
            color: 'blue'
        };

        // Create tag on the server
        this._tasksService.createTag(tag)
            .subscribe((response) => {

                // Update the tags manually until they are being refreshed automatically
                this.tags.push(response);
                this.filteredTags = this.tags;

                // Add the tag to the task
                this.addTag(response);
            });
    }

    /**
     * Add tag to the task
     *
     * @param tag
     */
    addTag(tag): void
    {
        // Get the tags form array
        const tagsFormArray = this.taskForm.get('tags') as FormArray;

        // Add the tag
        tagsFormArray.push(this._formBuilder.control(tag.id));

        // Update the task on the server
        this._tasksService.updateTask(this.task.id, {tags: this.task.tags}).subscribe();
    }

    /**
     * Remove tag from the task
     *
     * @param tag
     */
    removeTag(tag): void
    {
        // Get the tags form array
        const tagsFormArray = this.taskForm.get('tags') as FormArray;

        // Remove the tag
        tagsFormArray.removeAt(tagsFormArray.value.findIndex((item) => item === tag.id));

        // Update the task on the server
        this._tasksService.updateTask(this.task.id, {tags: this.task.tags}).subscribe();
    }

    /**
     * Toggle tag
     *
     * @param tag
     * @param change
     */
    toggleTag(tag, change: MatCheckboxChange): void
    {
        if ( change.checked )
        {
            this.addTag(tag);
        }
        else
        {
            this.removeTag(tag);
        }
    }

    /**
     * Update the tag color
     *
     * @param id
     * @param color
     */
    updateTagColor(id, color): void
    {
        // Update the tag on the server
        this._tasksService.updateTag(id, {color}).subscribe();
    }

    /**
     * Should the create tag button be visible
     *
     * @param inputValue
     */
    shouldShowCreateTagButton(inputValue): boolean
    {
        if ( inputValue === '' || this.tags.findIndex(tag => tag.title.toLowerCase() === inputValue.toLowerCase()) > -1 )
        {
            return false;
        }

        return true;
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
}
