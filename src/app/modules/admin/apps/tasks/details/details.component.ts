import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemplatePortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { MatButton } from '@angular/material/button';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDrawerToggleResult } from '@angular/material/sidenav';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';
import * as _ from 'lodash';
import * as moment from 'moment';
import { Tag, Task } from 'app/modules/admin/apps/tasks/tasks.type';
import { TasksListComponent } from 'app/modules/admin/apps/tasks/list/list.component';
import { TasksService } from 'app/modules/admin/apps/tasks/tasks.service';

@Component({
    selector     : 'tasks-details',
    templateUrl  : './details.component.html',
    styleUrls    : ['./details.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TasksDetailsComponent implements OnInit, OnDestroy
{
    tags: Tag[];
    filteredTags: Tag[];
    task: Task;
    taskForm: FormGroup;

    // Private
    private _dueDatePanelOverlayRef: OverlayRef;
    private _dueDatePanelTemplatePortal: TemplatePortal;
    private _priorityPanelOverlayRef: OverlayRef;
    private _priorityPanelTemplatePortal: TemplatePortal;
    private _tagsPanelOverlayRef: OverlayRef;
    private _taskFormValueChangesSubscription: Subscription | null;
    private _unsubscribeAll: Subject<any>;

    @ViewChild('dueDatePanelOrigin', {static: false})
    private _dueDatePanelOrigin: MatButton;

    @ViewChild('dueDatePanel', {static: false})
    private _dueDatePanel: TemplateRef<any>;

    @ViewChild('priorityPanelOrigin', {static: false})
    private _priorityPanelOrigin: MatButton;

    @ViewChild('priorityPanel', {static: false})
    private _priorityPanel: TemplateRef<any>;

    @ViewChild('tagsPanelOrigin', {static: false})
    private _tagsPanelOrigin: MatButton;

    @ViewChild('tagsPanel', {static: false})
    private _tagsPanel: TemplateRef<any>;

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
        this._tasksListComponent.matDrawer.open();

        // Create the task form
        this.taskForm = this._formBuilder.group({
            id        : [''],
            type      : [''],
            title     : [''],
            notes     : [''],
            completed : [false],
            dueDate   : [null],
            priority  : [0],
            tags      : this._formBuilder.array([]),
            subTasks  : this._formBuilder.array([]),
            order     : [0]
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

                // Manually fill the tags
                this.taskForm.setControl('tags', this._formBuilder.array(this.task.tags || []));

                // Manually fill the sub tasks
                const subTasksFormArray = this.taskForm.get('subTasks') as FormArray;
                subTasksFormArray.clear();

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

        // Dispose the overlays if they are still on the DOM
        if ( this._dueDatePanelOverlayRef )
        {
            this._dueDatePanelOverlayRef.dispose();
        }

        if ( this._priorityPanelOverlayRef )
        {
            this._priorityPanelOverlayRef.dispose();
        }

        if ( this._tagsPanelOverlayRef )
        {
            this._tagsPanelOverlayRef.dispose();
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
        return this._tasksListComponent.matDrawer.close();
    }

    /**
     * Toggle the completed status
     */
    toggleCompleted(): void
    {
        // Get the form control for 'completed'
        const completedFormControl = this.taskForm.get('completed');

        // Toggle the completed status
        completedFormControl.setValue(!completedFormControl.value);
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
                                  .flexibleConnectedTo(this._tagsPanelOrigin._elementRef.nativeElement)
                                  .withFlexibleDimensions()
                                  .withViewportMargin(64)
                                  .withLockedPosition()
                                  .withPositions([
                                      {
                                          originX : 'start',
                                          originY : 'top',
                                          overlayX: 'end',
                                          overlayY: 'top'
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
                                          overlayX: 'start',
                                          overlayY: 'top'
                                      },
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

            // Focus to the search input once the overlay has been attached
            this._tagsPanelOverlayRef.overlayElement.querySelector('input').focus();
        });

        // Create a portal from the template
        const templatePortal = new TemplatePortal(this._tagsPanel, this._viewContainerRef);

        // Attach the portal to the overlay
        this._tagsPanelOverlayRef.attach(templatePortal);

        // Subscribe to the backdrop click
        this._tagsPanelOverlayRef.backdropClick().subscribe(() => {

            // If overlay exists and attached...
            if ( this._tagsPanelOverlayRef && this._tagsPanelOverlayRef.hasAttached() )
            {
                // Detach it
                this._tagsPanelOverlayRef.detach();

                // Reset the tag filter
                this.filteredTags = this.tags;
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
     * Filter tags input key down event
     *
     * @param event
     */
    filterTagsInputKeyDown(event): void
    {
        // Enter
        if ( event.key === 'Enter' )
        {
            // Create the tag
            this.createTag(event.target.value);

            // Clear the input
            event.target.value = '';
        }
    }

    /**
     * Create new tag
     *
     * @param title
     */
    createTag(title): void
    {
        const tag = {
            title
        };

        // Create tag on the server
        this._tasksService.createTag(tag)
            .subscribe((response) => {

                // Update the tags manually until they are being refreshed automatically
                this.tags.unshift(response);
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
        tagsFormArray.insert(0, this._formBuilder.control(tag.id));

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
     * Should the create tag button be visible
     *
     * @param inputValue
     */
    shouldShowCreateTagButton(inputValue): boolean
    {
        return !!!(inputValue === '' || this.tags.findIndex(tag => tag.title.toLowerCase() === inputValue.toLowerCase()) > -1);
    }

    /**
     * Toggle notes
     */
    toggleNotes(): void
    {
        // Get the form control for 'notes'
        const notesFormControl = this.taskForm.get('notes');

        // Toggle the notes
        if ( notesFormControl.value === null )
        {
            notesFormControl.setValue('');
        }
        else
        {
            notesFormControl.setValue(null);
        }
    }

    /**
     * Open priority panel
     */
    openPriorityPanel(): void
    {
        // Create the overlay
        this._priorityPanelOverlayRef = this._overlay.create({
            backdropClass   : '',
            hasBackdrop     : true,
            scrollStrategy  : this._overlay.scrollStrategies.block(),
            positionStrategy: this._overlay.position()
                                  .flexibleConnectedTo(this._priorityPanelOrigin._elementRef.nativeElement)
                                  .withFlexibleDimensions()
                                  .withViewportMargin(64)
                                  .withLockedPosition()
                                  .withPositions([
                                      {
                                          originX : 'start',
                                          originY : 'top',
                                          overlayX: 'end',
                                          overlayY: 'top'
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
                                          overlayX: 'start',
                                          overlayY: 'top'
                                      },
                                      {
                                          originX : 'start',
                                          originY : 'bottom',
                                          overlayX: 'start',
                                          overlayY: 'top'
                                      }
                                  ])
        });

        // Subscribe to the attachments observable
        this._priorityPanelOverlayRef.attachments().subscribe(() => {

            // Focus to the search input once the overlay has been attached
            this._priorityPanelOverlayRef.overlayElement.querySelector('input').focus();
        });

        // Create a portal from the template
        this._priorityPanelTemplatePortal = new TemplatePortal(this._priorityPanel, this._viewContainerRef);

        // Attach the portal to the overlay
        this._priorityPanelOverlayRef.attach(this._priorityPanelTemplatePortal);

        // Subscribe to the backdrop click
        this._priorityPanelOverlayRef.backdropClick().subscribe(() => {
            this.closePriorityPanel();
        });
    }

    /**
     * Close the priority panel if it's open
     */
    closePriorityPanel(): void
    {
        // If overlay exists and attached...
        if ( this._priorityPanelOverlayRef && this._priorityPanelOverlayRef.hasAttached() )
        {
            // Detach it
            this._priorityPanelOverlayRef.detach();
        }

        // If template portal exists and attached...
        if ( this._priorityPanelTemplatePortal && this._priorityPanelTemplatePortal.isAttached )
        {
            // Detach it
            this._priorityPanelTemplatePortal.detach();
        }
    }

    /**
     * Open due date panel
     */
    openDueDatePanel(): void
    {
        // Create the overlay
        this._dueDatePanelOverlayRef = this._overlay.create({
            backdropClass   : '',
            hasBackdrop     : true,
            scrollStrategy  : this._overlay.scrollStrategies.block(),
            positionStrategy: this._overlay.position()
                                  .flexibleConnectedTo(this._dueDatePanelOrigin._elementRef.nativeElement)
                                  .withFlexibleDimensions()
                                  .withViewportMargin(64)
                                  .withLockedPosition()
                                  .withPositions([
                                      {
                                          originX : 'start',
                                          originY : 'top',
                                          overlayX: 'end',
                                          overlayY: 'top'
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
                                          overlayX: 'start',
                                          overlayY: 'top'
                                      },
                                      {
                                          originX : 'start',
                                          originY : 'bottom',
                                          overlayX: 'start',
                                          overlayY: 'top'
                                      }
                                  ])
        });

        // Create a portal from the template
        this._dueDatePanelTemplatePortal = new TemplatePortal(this._dueDatePanel, this._viewContainerRef);

        // Attach the portal to the overlay
        this._dueDatePanelOverlayRef.attach(this._dueDatePanelTemplatePortal);

        // Subscribe to the backdrop click
        this._dueDatePanelOverlayRef.backdropClick().subscribe(() => {
            this.closeDueDatePanel();
        });
    }

    /**
     * Close the due date panel
     */
    closeDueDatePanel(): void
    {
        // If overlay exists and attached...
        if ( this._dueDatePanelOverlayRef && this._dueDatePanelOverlayRef.hasAttached() )
        {
            // Detach it
            this._dueDatePanelOverlayRef.detach();
        }

        // If template portal exists and attached...
        if ( this._dueDatePanelTemplatePortal && this._dueDatePanelTemplatePortal.isAttached )
        {
            // Detach it
            this._dueDatePanelTemplatePortal.detach();
        }
    }

    /**
     * Update the due date
     *
     * @param event
     */
    updateDueDate(event: moment.Moment): void
    {
        // Get the form control for 'dueDate'
        const dueDateFormControl = this.taskForm.get('dueDate');

        // Update it
        dueDateFormControl.setValue(event.toISOString());

        // Close the due date panel...
        this.closeDueDatePanel();
    }

    /**
     * Remove the due date
     */
    removeDueDate(): void
    {
        // Get the form control for 'dueDate'
        const dueDateFormControl = this.taskForm.get('dueDate');

        // Clear the due date
        dueDateFormControl.setValue(null);

        // Close the due date panel...
        this.closeDueDatePanel();
    }

    /**
     * Check if the task is overdue or not
     */
    isOverdue(): boolean
    {
        return moment(this.task.dueDate, moment.ISO_8601).isBefore(moment(), 'days');
    }
}
