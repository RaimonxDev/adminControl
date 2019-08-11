import { ChangeDetectorRef, Component, ElementRef, HostBinding, Input, OnDestroy, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatCalendarCellCssClasses, MatMonthView } from '@angular/material/datepicker';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
    selector     : 'asm-date-range',
    templateUrl  : './date-range.component.html',
    styleUrls    : ['./date-range.component.scss'],
    encapsulation: ViewEncapsulation.None,
    // changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs     : 'asmDateRange'
})
export class AsmDateRangeComponent implements OnInit, OnDestroy
{
    // Start date
    @Input()
    startDate: Moment;

    // End date
    @Input()
    endDate: Moment;

    monthView1ActiveDate: Moment;
    monthView2ActiveDate: Moment;
    setWhichDate: 'start' | 'end';

    // Private
    @HostBinding('class.asm-date-range')
    private _defaultClassNames;

    @ViewChild('matMonthView1', {static: false})
    private _matMonthView1: MatMonthView<any>;

    @ViewChild('matMonthView2', {static: false})
    private _matMonthView2: MatMonthView<any>;

    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {ElementRef} _elementRef
     * @param {Renderer2} _renderer2
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _elementRef: ElementRef,
        private _renderer2: Renderer2
    )
    {
        // Set the private defaults
        this._defaultClassNames = true;
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.monthView1ActiveDate = moment();
        this.monthView2ActiveDate = moment().add(1, 'month');
        this.startDate = moment().startOf('day');
        this.endDate = moment().add(10, 'days').endOf('day');
        this.setWhichDate = 'start';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get month1 label
     */
    get month1Label(): string
    {
        return this.monthView1ActiveDate.format('MMMM Y');
    }

    /**
     * Get month2 label
     */
    get month2Label(): string
    {
        return this.monthView2ActiveDate.format('MMMM Y');
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {

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
     * Date class function to add/remove class names to calendar days
     */
    dateClass(): any
    {
        return (date: Moment): MatCalendarCellCssClasses => {

            // If the date is both start and end date...
            if ( date.isSame(this.startDate, 'day') && date.isSame(this.endDate, 'day') )
            {
                return ['asm-date-range', 'asm-date-range-start', 'asm-date-range-end'];
            }

            // If the date is the start date...
            if ( date.isSame(this.startDate, 'day') )
            {
                return ['asm-date-range', 'asm-date-range-start'];
            }

            // If the date is the end date...
            if ( date.isSame(this.endDate, 'day') )
            {
                return ['asm-date-range', 'asm-date-range-end'];
            }

            // If the date is in between start and end dates...
            if ( date.isBetween(this.startDate, this.endDate, 'day') )
            {
                return ['asm-date-range', 'asm-date-range-mid'];
            }

            return undefined;
        };
    }

    /**
     * Date filter to enable/disable calendar days
     */
    dateFilter(): any
    {
        return (date: Moment): boolean => {

            // If we are selecting the end date, disable all the dates that comes before the start date
            if ( this.setWhichDate === 'end' && date.isBefore(this.startDate) )
            {
                return false;
            }

            return true;
        };
    }

    /**
     * On selected change
     *
     * @param date
     */
    onSelectedChange(date): void
    {
        // If we are setting the start date...
        if ( this.setWhichDate === 'start' )
        {
            // Set the start date
            this.startDate = date;

            // Set the end date to the same date if start
            // date is after the current end date
            if ( this.startDate.isAfter(this.endDate) )
            {
                this.endDate = date;
            }
        }
        // If we are setting the end date...
        else
        {
            // Set the end date
            this.endDate = date;

            // Set the start date to the same date if end
            // date is before the current start date
            if ( this.startDate.isAfter(this.endDate) )
            {
                this.startDate = date;
            }
        }

        // Switch which date to set on the next run
        this.setWhichDate = this.setWhichDate === 'start' ? 'end' : 'start';

        // Run ngAfterContentInit on month views to trigger the dateClass function
        this._matMonthView1.ngAfterContentInit();
        this._matMonthView2.ngAfterContentInit();
    }

    /**
     * Go to previous month on both views
     */
    prev(): void
    {
        this.monthView1ActiveDate = moment(this.monthView1ActiveDate).subtract(1, 'month');
        this.monthView2ActiveDate = moment(this.monthView2ActiveDate).subtract(1, 'month');
    }

    /**
     * Go to next month on both views
     */
    next(): void
    {
        this.monthView1ActiveDate = moment(this.monthView1ActiveDate).add(1, 'month');
        this.monthView2ActiveDate = moment(this.monthView2ActiveDate).add(1, 'month');
    }
}
