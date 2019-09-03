import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { MatDialog } from '@angular/material/dialog';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { Calendar as FullCalendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import momentPlugin from '@fullcalendar/moment';
import rrulePlugin from '@fullcalendar/rrule';
import timeGridPlugin from '@fullcalendar/timegrid';
import * as _ from 'lodash';
import * as moment from 'moment';
import { RRule } from 'rrule';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AsmMediaWatcherService } from '@assembly';
import { CalendarConfirmationComponent } from 'app/modules/admin/apps/calendar/confirmation/confirmation.component';
import { CalendarRecurrenceComponent } from 'app/modules/admin/apps/calendar/recurrence/recurrence.component';
import { CalendarService } from 'app/modules/admin/apps/calendar/calendar.service';
import { Calendar, CalendarEvent, CalendarSettings } from 'app/modules/admin/apps/calendar/calendar.type';

@Component({
    selector       : 'calendar',
    templateUrl    : './calendar.component.html',
    styleUrls      : ['./calendar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation  : ViewEncapsulation.None
})
export class CalendarComponent implements OnInit, AfterViewInit, OnDestroy
{
    calendars: Calendar[];
    calendarPlugins: any;
    drawerMode: 'over' | 'side';
    drawerOpened: boolean;
    eventForm: FormGroup;
    eventTimeFormat: any;
    events: CalendarEvent[];
    settings: CalendarSettings;
    view: 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay' | 'listMonth';
    viewTitle: string;

    // Private
    private _eventPanelOverlayRef: OverlayRef;
    private _eventPanelTemplatePortal: TemplatePortal;
    private _fullCalendarApi: FullCalendar;
    private _unsubscribeAll: Subject<any>;

    @ViewChild('eventPanel', {static: false})
    private _eventPanel: TemplateRef<any>;

    @ViewChild('fullCalendar', {static: false})
    private _fullCalendar: FullCalendarComponent;

    /**
     * Constructor
     *
     * @param {AsmMediaWatcherService} _asmMediaWatcherService
     * @param {CalendarService} _calendarService
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {Document} _document
     * @param {FormBuilder} _formBuilder
     * @param {MatDialog} _matDialog
     * @param {Overlay} _overlay
     * @param {ViewContainerRef} _viewContainerRef
     */
    constructor(
        private _asmMediaWatcherService: AsmMediaWatcherService,
        private _calendarService: CalendarService,
        private _changeDetectorRef: ChangeDetectorRef,
        @Inject(DOCUMENT) private _document: Document,
        private _formBuilder: FormBuilder,
        private _matDialog: MatDialog,
        private _overlay: Overlay,
        private _viewContainerRef: ViewContainerRef
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.calendarPlugins = [dayGridPlugin, interactionPlugin, listPlugin, momentPlugin, rrulePlugin, timeGridPlugin];
        this.drawerMode = 'side';
        this.drawerOpened = true;
        this.events = [];
        this.view = 'dayGridMonth';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for event's recurrence status
     */
    get recurrenceStatus(): string
    {
        // Get the recurrence from event form
        const recurrence = this.eventForm.get('recurrence').value;

        // Return null, if there is no recurrence on the event
        if ( !recurrence )
        {
            return null;
        }

        // Convert the recurrence rule to text
        let ruleText = RRule.fromString(recurrence).toText();
        ruleText = ruleText.charAt(0).toUpperCase() + ruleText.slice(1);

        // Return the rule text
        return ruleText;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Create the event form
        this.eventForm = this._formBuilder.group({
            id              : [''],
            calendarId      : [''],
            recurringEventId: [null],
            title           : [''],
            description     : [''],
            start           : [null],
            end             : [null],
            range           : [{}],
            allDay          : [true],
            recurrence      : [null]
        });

        // Subscribe to 'start' field value changes
        this.eventForm.get('start').valueChanges.subscribe((value) => {

            // Get the current range value
            const range = this.eventForm.get('range').value;

            // Update the range value
            this.eventForm.get('range').setValue({
                ...range,
                start: value
            }, {emitEvent: false});
        });

        // Subscribe to 'end' field value changes
        this.eventForm.get('end').valueChanges.subscribe((value) => {

            // Get the current range value
            const range = this.eventForm.get('range').value;

            // Update the range value
            this.eventForm.get('range').setValue({
                ...range,
                end: value
            }, {emitEvent: false});
        });

        // Subscribe to 'range' field value changes
        this.eventForm.get('range').valueChanges.subscribe((range) => {

            if ( !range )
            {
                return;
            }

            // Set the 'start' and 'end' field values from the range
            this.eventForm.get('start').setValue(range.start, {emitEvent: false});
            this.eventForm.get('end').setValue(range.end, {emitEvent: false});
        });

        // Get calendars
        this._calendarService.calendars$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((calendars) => {

                // Store the calendars
                this.calendars = calendars;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Get events
        this._calendarService.events$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((events) => {

                // Clone the events to change the object reference so
                // that the FullCalendar can trigger a re-render.
                this.events = _.cloneDeep(events);

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Get settings
        this._calendarService.settings$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((settings) => {

                // Store the settings
                this.settings = settings;

                // Set the FullCalendar event time format based on the time format setting
                this.eventTimeFormat = {
                    hour    : settings.timeFormat === '12' ? 'numeric' : '2-digit',
                    hour12  : settings.timeFormat === '12',
                    minute  : '2-digit',
                    meridiem: settings.timeFormat === '12' ? 'short' : false
                };

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Subscribe to media changes
        this._asmMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((matchingAliases) => {

                // Set the drawerMode and drawerOpened if the given breakpoint is active
                if ( matchingAliases.includes('lt-md') )
                {
                    this.drawerMode = 'over';
                    this.drawerOpened = false;
                }
                else
                {
                    this.drawerMode = 'side';
                    this.drawerOpened = true;
                }

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void
    {
        // Get the full calendar API
        this._fullCalendarApi = this._fullCalendar.getApi();

        // Get the current view's title
        this.viewTitle = this._fullCalendarApi.view.title;

        // Get the view's current start and end dates, add/subtract
        // 60 days to create a ~150 days period to fetch the data for
        const start = moment(this._fullCalendarApi.view.currentStart).subtract(60, 'days').toISOString();
        const end = moment(this._fullCalendarApi.view.currentEnd).add(60, 'days').toISOString();

        // Get events
        this._calendarService.getEvents(start, end, true).subscribe();
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
     * Open the event panel
     *
     * @private
     */
    private _openEventPanel(calendarEvent): void
    {
        // Create the overlay
        this._eventPanelOverlayRef = this._overlay.create({
            panelClass      : 'calendar-event-panel',
            backdropClass   : '',
            hasBackdrop     : true,
            scrollStrategy  : this._overlay.scrollStrategies.reposition(),
            positionStrategy: this._overlay.position()
                                  .flexibleConnectedTo(calendarEvent.el)
                                  .withPositions([
                                      {
                                          originX : 'start',
                                          originY : 'top',
                                          overlayX: 'end',
                                          overlayY: 'top',
                                          offsetX : -8
                                      },
                                      {
                                          originX : 'start',
                                          originY : 'bottom',
                                          overlayX: 'end',
                                          overlayY: 'bottom',
                                          offsetX : -8
                                      }
                                  ])
        });

        // Create a portal from the template
        this._eventPanelTemplatePortal = new TemplatePortal(this._eventPanel, this._viewContainerRef);

        // On backdrop click...
        this._eventPanelOverlayRef.backdropClick().subscribe(() => {

            // Close the event panel
            this._closeEventPanel();
        });

        // Attach the portal to the overlay
        this._eventPanelOverlayRef.attach(this._eventPanelTemplatePortal);

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }

    /**
     * Close the event panel
     *
     * @private
     */
    private _closeEventPanel(): void
    {
        // If template portal exists and attached...
        if ( this._eventPanelTemplatePortal && this._eventPanelTemplatePortal.isAttached )
        {
            // Detach it
            this._eventPanelTemplatePortal.detach();
        }

        // If overlay exists and attached...
        if ( this._eventPanelOverlayRef && this._eventPanelOverlayRef.hasAttached() )
        {
            // Detach it
            this._eventPanelOverlayRef.detach();
            this._eventPanelOverlayRef.dispose();
        }

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Open recurrence panel
     */
    openRecurrenceDialog(): void
    {
        // Open the dialog
        const dialogRef = this._matDialog.open(CalendarRecurrenceComponent, {
            panelClass: 'calendar-event-recurrence-dialog',
            data      : {
                event: this.eventForm.value
            }
        });

        // After dialog closed
        dialogRef.afterClosed().subscribe((result) => {

            // Return, if canceled
            if ( !result || !result.recurrence )
            {
                return;
            }

            // Get the recurrence form field
            const recurrenceField = this.eventForm.get('recurrence');

            // Only update the recurrence if it actually changed
            if ( recurrenceField.value === result.recurrence )
            {
                return;
            }

            // Update the recurrence field
            recurrenceField.setValue(result.recurrence);

            // Set the field as dirty and touched
            recurrenceField.markAsDirty();
            recurrenceField.markAsTouched();
        });
    }

    /**
     * Get calendar by id
     *
     * @param id
     */
    getCalendar(id): Calendar
    {
        if ( !id )
        {
            return;
        }

        return this.calendars.find((calendar) => calendar.id === id);
    }

    /**
     * Change the calendar view
     *
     * @param view
     */
    changeView(view: 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay' | 'listMonth'): void
    {
        // Store the view
        this.view = view;

        // If the FullCalendar API is available...
        if ( this._fullCalendarApi )
        {
            // Set the view
            this._fullCalendarApi.changeView(view);

            // Update the view title
            this.viewTitle = this._fullCalendarApi.view.title;
        }
    }

    /**
     * Moves the calendar one stop back
     */
    previous(): void
    {
        // Go to previous stop
        this._fullCalendarApi.prev();

        // Update the view title
        this.viewTitle = this._fullCalendarApi.view.title;

        // Get the view's current start date
        const start = moment(this._fullCalendarApi.view.currentStart).toISOString();

        // Prefetch past events
        this._calendarService.prefetchPastEvents(start).subscribe();
    }

    /**
     * Moves the calendar to the current date
     */
    today(): void
    {
        // Go to today
        this._fullCalendarApi.today();

        // Update the view title
        this.viewTitle = this._fullCalendarApi.view.title;
    }

    /**
     * Moves the calendar one stop forward
     */
    next(): void
    {
        // Go to next stop
        this._fullCalendarApi.next();

        // Update the view title
        this.viewTitle = this._fullCalendarApi.view.title;

        // Get the view's current end date
        const end = moment(this._fullCalendarApi.view.currentEnd).toISOString();

        // Prefetch future events
        this._calendarService.prefetchFutureEvents(end).subscribe();
    }

    /**
     * On date click
     *
     * @param event
     */
    onDateClick(event): void
    {
        // console.log(event);

        // Close the event panel
        // this._closeEventPanel();
    }

    /**
     * On event click
     *
     * @param calendarEvent
     */
    onEventClick(calendarEvent): void
    {
        // Find the event with the clicked event's id
        const event: any = _.cloneDeep(this.events.find(item => item.id === calendarEvent.event.id));

        // Reset the form and fill the event
        this.eventForm.reset();
        this.eventForm.patchValue(event);

        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Open the event panel
        this._openEventPanel(calendarEvent);
    }

    /**
     * On event render
     *
     * @param calendarEvent
     */
    onEventRender(calendarEvent): void
    {
        // Get event's calendar
        const calendar = this.calendars.find((item) => item.id === calendarEvent.event.extendedProps.calendarId);

        // Set the event's background color
        calendarEvent.el.style.backgroundColor = calendar.color;

        // Set the event's visibility
        calendarEvent.el.style.display = calendar.visible ? 'flex' : 'none';

        // Set the event's title to '(No title)' if event title is not available
        if ( !calendarEvent.event.title )
        {
            calendarEvent.el.querySelector('.fc-title').innerText = '(No title)';
        }
    }

    /**
     * Update the calendar
     *
     * @param calendar
     */
    updateCalendar(calendar): void
    {
        // Update the calendar on the server
        this._calendarService.updateCalendar(calendar.id, calendar).subscribe(() => {

            // Re-render the events
            this._fullCalendarApi.rerenderEvents();
        });
    }

    /**
     * Update the event
     */
    updateEvent(): void
    {
        // Get the clone of the event form value
        const event = _.clone(this.eventForm.value);
        const {range, ...eventWithoutRange} = event;

        // Get the original event
        const originalEvent = this.events.find(item => item.id === this.eventForm.get('id').value);

        // Return, if there are no changes made to the event
        if ( _.isEqual(eventWithoutRange, originalEvent) )
        {
            // Close the event panel
            this._closeEventPanel();

            return;
        }

        // If the event is an instance of a recurring event...
        if ( this.eventForm.get('recurringEventId').value )
        {
            // Show the confirmation dialog with correct information
            const dialogRef = this._matDialog.open(CalendarConfirmationComponent, {
                panelClass: 'calendar-event-confirmation-dialog',
                data      : {
                    isRecurrenceModified: originalEvent.recurrence !== this.eventForm.get('recurrence').value
                }
            });

            // After dialog closed
            dialogRef.afterClosed().subscribe((result) => {

                // Return, if canceled
                if ( !result )
                {
                    return;
                }

                console.log(result);
            });

            // Close the event panel
            this._closeEventPanel();
        }
        // If the event is a normal, non-recurring event...
        else
        {
            // Update the event on the server
            this._calendarService.updateEvent(event.id, event).subscribe((updatedEvent) => {

                // Reset the form with the updated event
                this.eventForm.reset(updatedEvent);

                // Close the event panel
                this._closeEventPanel();
            });
        }
    }
}
