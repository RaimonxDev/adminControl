import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { CalendarWeekday } from 'app/modules/admin/apps/calendar/calendar.type';

@Component({
    selector     : 'calendar-custom-recurrence',
    templateUrl  : './custom-recurrence.component.html',
    styleUrls    : ['./custom-recurrence.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CalendarCustomRecurrenceComponent implements OnInit, OnDestroy
{
    end: 'never' | 'until' | 'count';
    monthlyRepeat: 'onMonthday' | 'onNthWeekday';
    ordinalBysetpos: string;
    recurrenceForm: FormGroup;
    weekday: CalendarWeekday;
    weekdays: CalendarWeekday[];

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {MatDialogRef} matDialogRef
     * @param {MAT_DIALOG_DATA} data
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        public matDialogRef: MatDialogRef<CalendarCustomRecurrenceComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private _formBuilder: FormBuilder
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.end = 'never';
        this.monthlyRepeat = 'onMonthday';

        // Initialize
        this._init();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get start date
        const startDate = moment(this.data.event.start);

        // Calculate the bysetpos
        let bysetpos = 1;
        while ( startDate.clone().isSame(startDate.clone().subtract(bysetpos, 'week'), 'month') )
        {
            bysetpos++;
        }

        // Calculate the ordinal bysetpos - We only need 5 of them, so we won't automate the process
        const ordinalNumbers = {
            1: 'first',
            2: 'second',
            3: 'third',
            4: 'fourth',
            5: 'fifth'
        };
        this.ordinalBysetpos = ordinalNumbers[bysetpos];

        // Create the recurrence form
        this.recurrenceForm = this._formBuilder.group({
            freq      : ['DAILY'],
            interval  : [1, Validators.required],
            dtstart   : [startDate.clone().toISOString()],
            bymonth   : [startDate.clone().month() + 1],
            bymonthday: [startDate.clone().date()],
            byweekday : [startDate.clone().format('dd').toUpperCase()],
            bysetpos  : [bysetpos],
            until     : [null],
            count     : [null]
        });

        // Set end defaults for the first time
        this._setEndDefaults(this.recurrenceForm.get('freq').value, this.recurrenceForm.get('dtstart').value);

        // Subscribe to 'freq' field value changes
        this.recurrenceForm.get('freq').valueChanges.subscribe((value) => {

            // Set the end defaults
            this._setEndDefaults(value, this.recurrenceForm.get('dtstart'));
        });

        // Subscribe to 'byweekday' field value changes
        this.recurrenceForm.get('byweekday').valueChanges.subscribe((value) => {

            // If nothing is selected, select the original value from
            // the event form to prevent an empty value on the field
            if ( !value || !value.length )
            {
                // Get the day of event start date
                const eventStartDay = startDate.clone().format('dd').toUpperCase();

                // Set the original value back without emitting a
                // change event to prevent an infinite loop
                this.recurrenceForm.get('byweekday').setValue([eventStartDay], {emitEvent: false});
            }
        });

        // If recurrence rules are available on the event a.k.a. if the event is
        // already a recurring event, patch the recurrence form with them
        if ( this.data.event.recurrenceRules )
        {
            this.recurrenceForm.patchValue(this.data.event.recurrenceRules);
        }
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
     * Initialize
     *
     * @private
     */
    private _init(): void
    {
        // Get the original recurrence rules
        const recurrenceRules = this.data.event.recurrenceRules;

        // If recurrence rules are available on the
        // event a.k.a. if the event is a recurring event...
        if ( recurrenceRules )
        {
            // Check if recurrence happens on the nth weekday
            if ( recurrenceRules.freq === 'MONTHLY' && recurrenceRules.byweekday && recurrenceRules.bysetpos )
            {
                this.monthlyRepeat = 'onNthWeekday';
            }

            // Check if until or count available
            if ( recurrenceRules.until )
            {
                this.end = 'until';
            }

            if ( recurrenceRules.count )
            {
                this.end = 'count';
            }
        }

        // Set the weekdays
        this._setWeekdays();
    }

    /**
     * Set the weekdays based on the
     * week start day setting
     *
     * @private
     */
    private _setWeekdays(): void
    {
        // Setup weekdays
        const weekdays = this.data.weekdays;

        // Sunday
        if ( this.data.settings.startWeekOn === 0 )
        {
            // Move the Sunday to the beginning
            weekdays.unshift(weekdays.pop());
        }

        // Saturday
        if ( this.data.settings.startWeekOn === 6 )
        {
            // Move the Sunday to the beginning
            weekdays.unshift(weekdays.pop());

            // Then move the Saturday to the beginning
            weekdays.unshift(weekdays.pop());
        }

        // Set the weekdays
        this.weekdays = weekdays;

        // Also set the weekday based on the event's start date
        this.weekday = this.weekdays.find((weekday) => weekday.value === moment(this.data.event.start).format('dd').toUpperCase());
    }

    /**
     * Set the end defaults based on frequency
     *
     * @param freq
     * @param startDate
     * @private
     */
    private _setEndDefaults(freq, startDate): void
    {
        // Create a moment object from the start date
        startDate = moment(startDate);

        // If until is not selected
        if ( this.end !== 'until' )
        {
            let until;

            // Change the until's default value based on the frequency
            if ( freq === 'DAILY' )
            {
                until = startDate.clone().add(1, 'month').toISOString();
            }

            if ( freq === 'WEEKLY' )
            {
                until = startDate.clone().add(12, 'weeks').toISOString();
            }

            if ( freq === 'MONTHLY' )
            {
                until = startDate.clone().add(12, 'months').toISOString();
            }

            if ( freq === 'YEARLY' )
            {
                until = startDate.clone().add(5, 'years').toISOString();
            }

            // Set the until
            this.recurrenceForm.get('until').setValue(until);
        }

        // If count is not selected...
        if ( this.end !== 'count' )
        {
            let count;

            // Change the count's default value based on the frequency
            if ( freq === 'DAILY' )
            {
                count = 30;
            }

            if ( freq === 'WEEKLY' || freq === 'MONTHLY' )
            {
                count = 12;
            }

            if ( freq === 'YEARLY' )
            {
                count = 5;
            }

            // Set the count
            this.recurrenceForm.get('count').setValue(count);
        }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Save and close
     */
    saveAndClose(): void
    {
        // Close the dialog
        this.matDialogRef.close();
    }

    /**
     * Cancel
     */
    cancel(): void
    {

    }
}
