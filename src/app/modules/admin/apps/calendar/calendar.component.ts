import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
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
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AsmMediaWatcherService } from '@assembly';
import { Calendar, CalendarEvent } from 'app/modules/admin/apps/calendar/calendar.type';
import { CalendarService } from 'app/modules/admin/apps/calendar/calendar.service';

@Component({
    selector     : 'calendar',
    templateUrl  : './calendar.component.html',
    styleUrls    : ['./calendar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit, AfterViewInit, OnDestroy
{
    calendars: Calendar[];
    calendarPlugins: any;
    drawerMode: 'over' | 'side';
    drawerOpened: boolean;
    eventForm: FormGroup;
    events: CalendarEvent[];
    view: 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay' | 'listMonth';

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
     * @param {Overlay} _overlay
     * @param {ViewContainerRef} _viewContainerRef
     */
    constructor(
        private _asmMediaWatcherService: AsmMediaWatcherService,
        private _calendarService: CalendarService,
        private _changeDetectorRef: ChangeDetectorRef,
        @Inject(DOCUMENT) private _document: Document,
        private _formBuilder: FormBuilder,
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
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Create the event form
        this.eventForm = this._formBuilder.group({
            id         : [''],
            calendarId : [''],
            ruleId     : [null],
            title      : ['', Validators.required],
            description: [''],
            start      : [null],
            end        : [null],
            range      : [null],
            allDay     : [true],
            editable   : [true]
        });

        // Get calendars
        this._calendarService.calendars$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((calendars) => {
                this.calendars = calendars;
            });

        // Get events
        this._calendarService.events$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((events) => {

                // Clone the events to change the object reference so
                // that the FullCalendar can trigger a re-render.
                this.events = _.cloneDeep(events);
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
                    this.drawerOpened = false;
                }
            });
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void
    {
        // Get the full calendar API
        this._fullCalendarApi = this._fullCalendar.getApi();

        // Get the view's current start and end dates, add/subtract
        // 60 days to create a ~150 days period to fetch the data for
        const start = moment(this._fullCalendarApi.view.currentStart).subtract(60, 'days').toISOString();
        const end = moment(this._fullCalendarApi.view.currentEnd).add(60, 'days').toISOString();

        // Get events
        this._calendarService.getEvents(start, end).subscribe();
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
        if ( this._eventPanelOverlayRef )
        {
            this._eventPanelOverlayRef.dispose();
        }
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
        // Outside click handler
        const outsideClickHandler = (event) => {

            // Return, if the overlay reference or overlay element doesn't exist
            if ( !this._eventPanelOverlayRef || !this._eventPanelOverlayRef.overlayElement )
            {
                return;
            }

            // Return, if the overlay element contains the event target...
            if ( this._eventPanelOverlayRef.overlayElement.contains(event.target) )
            {
                return;
            }

            // Close the event panel
            this._closeEventPanel();
        };

        // Close the currently opened event panel if there is one
        this._closeEventPanel();

        // Create the overlay
        this._eventPanelOverlayRef = this._overlay.create({
            panelClass      : 'calendar-event-panel',
            backdropClass   : '',
            hasBackdrop     : false,
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
                                          originX : 'end',
                                          originY : 'top',
                                          overlayX: 'start',
                                          overlayY: 'top',
                                          offsetX : 8
                                      }
                                  ])
        });

        // Create a portal from the template
        this._eventPanelTemplatePortal = new TemplatePortal(this._eventPanel, this._viewContainerRef);

        // Subscribe to attachment
        this._eventPanelOverlayRef.attachments().subscribe(() => {

            // Listen for document clicks
            this._document.addEventListener('click', outsideClickHandler, {passive: true});

            // Find the event and update the form values with it
            this._handleCalendarEvent(calendarEvent);
        });

        // Subscribe to detachment
        this._eventPanelOverlayRef.detachments().subscribe(() => {

            // Remove document click listener for document clicks
            this._document.removeEventListener('click', outsideClickHandler);
        });

        // Attach the portal to the overlay
        this._eventPanelOverlayRef.attach(this._eventPanelTemplatePortal);
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
        }
    }

    /**
     * Handle the calendar event so we can show it on the event form
     *
     * @private
     */
    private _handleCalendarEvent(calendarEvent): void
    {
        // Find the event and clone it
        const event: any = _.cloneDeep(this.events.find(item => item.id === calendarEvent.event.id));

        // Create the range object for date range picker
        event.range = {
            start: moment(event.start).toISOString(),
            end  : moment(event.end).toISOString()
        };

        // Fill the event form with the form event
        this.eventForm.patchValue(event);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

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
        }
    }

    /**
     * Moves the calendar one stop back
     */
    previous(): void
    {
        // Go to previous stop
        this._fullCalendarApi.prev();

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
    }

    /**
     * Moves the calendar one stop forward
     */
    next(): void
    {
        // Go to next stop
        this._fullCalendarApi.next();

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
        // Do not propagate so that the document click won't be triggered
        // which will close the event panel immediately after it's opened
        calendarEvent.jsEvent.stopPropagation();

        // Open the event panel
        this._openEventPanel(calendarEvent);
    }

    /**
     * Update the event
     */
    updateEvent(): void
    {
        // Get the clone of the event form value
        const event = _.clone(this.eventForm.value);

        // Set the start and end dates from range
        event.start = event.range.start;
        event.end = event.range.end;

        // Update the event on the server
        this._calendarService.updateEvent(event.id, event).subscribe((updatedEvent) => {

            // Reset the form with the updated event
            this.eventForm.reset(updatedEvent);
        });
    }
}
