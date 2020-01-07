import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApexOptions, ChartComponent } from 'ng-apexcharts';
import { DashboardAnalyticsService } from 'app/modules/admin/apps/dashboard/analytics/analytics.service';

@Component({
    selector       : 'dashboard-analytics',
    templateUrl    : './analytics.component.html',
    styleUrls      : ['./analytics.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardAnalyticsComponent implements OnInit, AfterViewInit, OnDestroy
{
    data: any;
    searchesDataSource: MatTableDataSource<any>;
    searchesTableColumns: string[];
    browsersOptions: ApexOptions;
    channelsOptions: ApexOptions;
    conversionRateOptions: ApexOptions;
    devicesOptions: ApexOptions;
    purchasesOptions: ApexOptions;
    totalVisitsOptions: ApexOptions;
    uniqueVisitorsOptions: ApexOptions;

    @ViewChild('searchesTable', {read: MatSort})
    searchesTableMatSort: MatSort;

    @ViewChild('browsersChartComponent')
    browsersChartComponent: ChartComponent;

    @ViewChild('channelsChartComponent')
    channelsChartComponent: ChartComponent;

    @ViewChild('conversionRateChartComponent')
    conversionRateChartComponent: ChartComponent;

    @ViewChild('devicesChartComponent')
    devicesChartComponent: ChartComponent;

    @ViewChild('purchasesChartComponent')
    purchasesChartComponent: ChartComponent;

    @ViewChild('totalVisitsChartComponent')
    totalVisitsChartComponent: ChartComponent;

    @ViewChild('uniqueVisitorsChartComponent')
    uniqueVisitorsChartComponent: ChartComponent;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {DashboardAnalyticsService} _dashboardAnalyticsService
     */
    constructor(
        private _dashboardAnalyticsService: DashboardAnalyticsService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.searchesDataSource = new MatTableDataSource();
        this.searchesTableColumns = ['search', 'count', 'revenue'];
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the data
        this._dashboardAnalyticsService.data$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data) => {

                // Store the data
                this.data = data;

                // Store the table data
                this.searchesDataSource.data = data.searches;

                // Prepare the chart data
                this._prepareChartData();
            });
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void
    {
        // Make the recent orders data source sortable
        this.searchesDataSource.sort = this.searchesTableMatSort;
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Explicitly call destroy on charts to prevent memory leaks
        this.browsersChartComponent.destroy();
        this.conversionRateChartComponent.destroy();
        this.channelsChartComponent.destroy();
        this.devicesChartComponent.destroy();
        this.purchasesChartComponent.destroy();
        this.totalVisitsChartComponent.destroy();
        this.uniqueVisitorsChartComponent.destroy();

        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Prepare the chart data from the data
     *
     * @private
     */
    private _prepareChartData(): void
    {
        // Browsers
        this.browsersOptions = {
            chart      : {
                animations: {
                    speed           : 400,
                    animateGradually: {
                        enabled: false
                    }
                },
                fontFamily: 'inherit',
                foreColor : 'inherit',
                height    : '100%',
                type      : 'bar',
                stacked   : true,
                stackType : '100%',
                sparkline : {
                    enabled: true
                }
            },
            colors     : [
                '#B83280',
                '#D53F8C',
                '#ED64A6',
                '#F687B3'
            ],
            plotOptions: {
                bar: {
                    barHeight : '100%',
                    horizontal: true
                }
            },
            series     : this.data.browsers.series,
            states     : {
                hover: {
                    filter: {
                        type: 'none'
                    }
                }
            },
            tooltip    : {
                theme: 'dark',
                x    : {
                    show: false
                }
            },
            yaxis      : {
                labels: {
                    formatter: (val) => {
                        return val.toString();
                    }
                }
            }
        };

        // Channels
        this.channelsOptions = {
            chart      : {
                animations: {
                    speed           : 400,
                    animateGradually: {
                        enabled: false
                    }
                },
                fontFamily: 'inherit',
                foreColor : 'inherit',
                height    : '100%',
                type      : 'bar',
                stacked   : true,
                stackType : '100%',
                sparkline : {
                    enabled: true
                }
            },
            colors     : [
                '#6B46C1',
                '#805AD5',
                '#9F7AEA',
                '#B794F4'
            ],
            plotOptions: {
                bar: {
                    barHeight : '100%',
                    horizontal: true
                }
            },
            series     : this.data.channels.series,
            states     : {
                hover: {
                    filter: {
                        type: 'none'
                    }
                }
            },
            tooltip    : {
                theme: 'dark',
                x    : {
                    show: false
                }
            },
            yaxis      : {
                labels: {
                    formatter: (val) => {
                        return val.toString();
                    }
                }
            }
        };

        // Conversion rate
        this.conversionRateOptions = {
            chart      : {
                animations: {
                    speed           : 400,
                    animateGradually: {
                        enabled: false
                    }
                },
                fontFamily: 'inherit',
                foreColor : 'inherit',
                height    : '100%',
                type      : 'bar',
                toolbar   : {
                    show: false
                },
                zoom      : {
                    enabled: false
                }
            },
            colors     : ['#5A67D8'],
            dataLabels : {
                enabled: false
            },
            grid       : {
                padding: {
                    top   : 0,
                    bottom: 0
                },
                yaxis  : {
                    lines: {
                        show: false
                    }
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: '55%'
                }
            },
            series     : [
                {
                    name: 'Conversion Rate',
                    data: this.data.conversionRate.data
                }
            ],
            tooltip    : {
                theme: 'dark',
                y    : {
                    formatter: (val) => {
                        return val.toFixed(2) + '%';
                    }
                }
            },
            xaxis      : {
                type      : 'category',
                categories: this.data.conversionRate.labels,
                labels    : {
                    style: {
                        colors: 'currentColor'
                    }
                },
                tooltip   : {
                    enabled: false
                }
            },
            yaxis      : {
                axisBorder: {
                    show: true
                },
                axisTicks : {
                    show: true
                },
                labels    : {
                    formatter: (val, index) => {
                        return val.toFixed(1) + '%';
                    },
                    style    : {
                        color: 'currentColor'
                    }
                }
            }
        };

        // Devices
        this.devicesOptions = {
            chart      : {
                animations: {
                    speed           : 400,
                    animateGradually: {
                        enabled: false
                    }
                },
                fontFamily: 'inherit',
                foreColor : 'inherit',
                height    : '100%',
                type      : 'bar',
                stacked   : true,
                stackType : '100%',
                sparkline : {
                    enabled: true
                }
            },
            colors     : [
                '#2C7A7B',
                '#319795',
                '#38B2AC',
                '#4FD1C5'
            ],
            plotOptions: {
                bar: {
                    barHeight : '100%',
                    horizontal: true
                }
            },
            series     : this.data.devices.series,
            states     : {
                hover: {
                    filter: {
                        type: 'none'
                    }
                }
            },
            tooltip    : {
                theme: 'dark',
                x    : {
                    show: false
                }
            },
            yaxis      : {
                labels: {
                    formatter: (val) => {
                        return val.toString();
                    }
                }
            }
        };

        // Purchases
        this.purchasesOptions = {
            chart  : {
                animations: {
                    speed           : 400,
                    animateGradually: {
                        enabled: false
                    }
                },
                fontFamily: 'inherit',
                foreColor : 'inherit',
                height    : '100%',
                type      : 'area',
                sparkline : {
                    enabled: true
                }
            },
            colors : ['#4FD1C5'],
            series : [
                {
                    name: 'Purchases',
                    data: this.data.purchases.data
                }
            ],
            tooltip: {
                theme: 'dark'
            },
            xaxis  : {
                type      : 'category',
                categories: this.data.purchases.labels
            },
            yaxis  : {
                labels: {
                    formatter: (val) => {
                        return val.toString();
                    }
                }
            }
        };

        // Total visits
        this.totalVisitsOptions = {
            chart  : {
                animations: {
                    speed           : 400,
                    animateGradually: {
                        enabled: false
                    }
                },
                fontFamily: 'inherit',
                foreColor : 'inherit',
                height    : '100%',
                type      : 'area',
                sparkline : {
                    enabled: true
                }
            },
            colors : ['#3182CE'],
            series : [
                {
                    name: 'Total Visits',
                    data: this.data.totalVisits.data
                }
            ],
            tooltip: {
                theme: 'dark'
            },
            xaxis  : {
                type      : 'category',
                categories: this.data.totalVisits.labels
            },
            yaxis  : {
                labels: {
                    formatter: (val) => {
                        return val.toString();
                    }
                }
            }
        };

        // Unique visitors
        this.uniqueVisitorsOptions = {
            chart  : {
                animations: {
                    speed           : 400,
                    animateGradually: {
                        enabled: false
                    }
                },
                fontFamily: 'inherit',
                foreColor : 'inherit',
                height    : '100%',
                type      : 'area',
                sparkline : {
                    enabled: true
                }
            },
            colors : ['#48BB78'],
            series : [
                {
                    name: 'Unique Visitors',
                    data: this.data.uniqueVisitors.data
                }
            ],
            tooltip: {
                theme: 'dark'
            },
            xaxis  : {
                type      : 'category',
                categories: this.data.uniqueVisitors.labels
            },
            yaxis  : {
                labels: {
                    formatter: (val) => {
                        return val.toString();
                    }
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

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
