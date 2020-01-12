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
    range: string;
    recentOrdersDataSource: MatTableDataSource<any>;
    recentOrdersTableColumns: string[];
    ageOptions: ApexOptions;
    averagePurchaseValueOptions: ApexOptions;
    browsersOptions: ApexOptions;
    channelsOptions: ApexOptions;
    devicesOptions: ApexOptions;
    genderOptions: ApexOptions;
    growthRateOptions: ApexOptions;
    languageOptions: ApexOptions;
    newVsReturningOptions: ApexOptions;
    purchasesOptions: ApexOptions;
    refundsOptions: ApexOptions;
    totalVisitsOptions: ApexOptions;
    uniqueVisitorsOptions: ApexOptions;
    uniquePurchasesOptions: ApexOptions;

    @ViewChild('recentOrdersTable', {read: MatSort})
    recentOrdersTableMatSort: MatSort;

    @ViewChild('ageChartComponent')
    ageChartComponent: ChartComponent;

    @ViewChild('averagePurchaseValueChartComponent')
    averagePurchaseValueChartComponent: ChartComponent;

    @ViewChild('browsersChartComponent')
    browsersChartComponent: ChartComponent;

    @ViewChild('channelsChartComponent')
    channelsChartComponent: ChartComponent;

    @ViewChild('devicesChartComponent')
    devicesChartComponent: ChartComponent;

    @ViewChild('genderChartComponent')
    genderChartComponent: ChartComponent;

    @ViewChild('growthRateChartComponent')
    growthRateChartComponent: ChartComponent;

    @ViewChild('languageChartComponent')
    languageChartComponent: ChartComponent;

    @ViewChild('newVsReturningChartComponent')
    newVsReturningChartComponent: ChartComponent;

    @ViewChild('purchasesChartComponent')
    purchasesChartComponent: ChartComponent;

    @ViewChild('refundsChartComponent')
    refundsChartComponent: ChartComponent;

    @ViewChild('totalVisitsChartComponent')
    totalVisitsChartComponent: ChartComponent;

    @ViewChild('uniquePurchasesChartComponent')
    uniquePurchasesChartComponent: ChartComponent;

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
        this.range = '30days';
        this.recentOrdersDataSource = new MatTableDataSource();
        this.recentOrdersTableColumns = ['orderId', 'date', 'customer', 'product', 'amount', 'status'];
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
                this.recentOrdersDataSource.data = data.recentOrders;

                // Prepare the chart data
                this._prepareChartData();
            });
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void
    {
        // Make the data source sortable
        this.recentOrdersDataSource.sort = this.recentOrdersTableMatSort;
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Explicitly call destroy on charts to prevent memory leaks
        this.averagePurchaseValueChartComponent.destroy();
        this.ageChartComponent.destroy();
        this.browsersChartComponent.destroy();
        this.growthRateChartComponent.destroy();
        this.channelsChartComponent.destroy();
        this.devicesChartComponent.destroy();
        this.genderChartComponent.destroy();
        this.languageChartComponent.destroy();
        this.newVsReturningChartComponent.destroy();
        this.purchasesChartComponent.destroy();
        this.refundsChartComponent.destroy();
        this.totalVisitsChartComponent.destroy();
        this.uniquePurchasesChartComponent.destroy();
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
        // Age
        this.ageOptions = {
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
                type      : 'donut',
                sparkline : {
                    enabled: true
                }
            },
            colors     : ['#DD6B20', '#F6AD55'],
            labels     : this.data.age.labels,
            plotOptions: {
                pie: {
                    expandOnClick: false,
                    donut        : {
                        size: '70%'
                    }
                }
            },
            series     : this.data.age.series,
            states     : {
                hover : {
                    filter: {
                        type: 'none'
                    }
                },
                active: {
                    filter: {
                        type: 'none'
                    }
                }
            },
            tooltip    : {
                enabled        : true,
                fillSeriesColor: false,
                theme          : 'dark',
                custom         : ({seriesIndex, w}) => {
                    return `<div class="flex items-center h-32 min-h-32 max-h-32 px-12">
                                <div class="w-12 h-12 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
                                <div class="ml-8 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
                                <div class="ml-8 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
                            </div>`;
                }
            }
        };

        // Average purchase value
        this.averagePurchaseValueOptions = {
            chart  : {
                animations: {
                    speed           : 400,
                    animateGradually: {
                        enabled: false
                    }
                },
                fontFamily: 'inherit',
                foreColor : 'inherit',
                width     : '100%',
                height    : '100%',
                type      : 'line',
                sparkline : {
                    enabled: true
                }
            },
            colors : ['#A0AEC0'],
            series : [
                {
                    name: 'Average Purchase Value',
                    data: this.data.averagePurchaseValue.data
                }
            ],
            stroke : {
                curve: 'straight',
                width: 2
            },
            tooltip: {
                enabled: false
            },
            xaxis  : {
                type: 'numeric'
            }
        };

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
                theme : 'dark',
                x     : {
                    show: false
                },
                custom: ({seriesIndex, w}) => {
                    return `<div class="flex items-center h-32 min-h-32 max-h-32 px-12">
                                <div class="w-12 h-12 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
                                <div class="ml-8 text-md leading-none">${w.config.series[seriesIndex].name}:</div>
                                <div class="ml-8 text-md font-bold leading-none">${w.config.series[seriesIndex].data[0]}</div>
                            </div>`;
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
                theme : 'dark',
                x     : {
                    show: false
                },
                custom: ({seriesIndex, w}) => {
                    return `<div class="flex items-center h-32 min-h-32 max-h-32 px-12">
                                <div class="w-12 h-12 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
                                <div class="ml-8 text-md leading-none">${w.config.series[seriesIndex].name}:</div>
                                <div class="ml-8 text-md font-bold leading-none">${w.config.series[seriesIndex].data[0]}</div>
                            </div>`;
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
                theme : 'dark',
                x     : {
                    show: false
                },
                custom: ({seriesIndex, w}) => {
                    return `<div class="flex items-center h-32 min-h-32 max-h-32 px-12">
                                <div class="w-12 h-12 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
                                <div class="ml-8 text-md leading-none">${w.config.series[seriesIndex].name}:</div>
                                <div class="ml-8 text-md font-bold leading-none">${w.config.series[seriesIndex].data[0]}</div>
                            </div>`;
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

        // Gender
        this.genderOptions = {
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
                type      : 'donut',
                sparkline : {
                    enabled: true
                }
            },
            colors     : ['#319795', '#4FD1C5'],
            labels     : this.data.gender.labels,
            plotOptions: {
                pie: {
                    expandOnClick: false,
                    donut        : {
                        size: '70%'
                    }
                }
            },
            series     : this.data.gender.series,
            states     : {
                hover : {
                    filter: {
                        type: 'none'
                    }
                },
                active: {
                    filter: {
                        type: 'none'
                    }
                }
            },
            tooltip    : {
                enabled        : true,
                fillSeriesColor: false,
                theme          : 'dark',
                custom         : ({seriesIndex, w}) => {
                    return `<div class="flex items-center h-32 min-h-32 max-h-32 px-12">
                                <div class="w-12 h-12 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
                                <div class="ml-8 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
                                <div class="ml-8 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
                            </div>`;
                }
            }
        };

        // Growth rate
        this.growthRateOptions = {
            chart  : {
                animations: {
                    speed           : 400,
                    animateGradually: {
                        enabled: false
                    }
                },
                fontFamily: 'inherit',
                foreColor : 'inherit',
                width     : '100%',
                height    : '100%',
                type      : 'area',
                sparkline : {
                    enabled: true
                }
            },
            colors : ['#A3BFFA', '#667EEA'],
            series : this.data.growthRate.series,
            stroke : {
                curve: 'straight',
                width: 2
            },
            tooltip: {
                theme: 'dark',
                x    : {
                    format: 'MMM dd, yyyy'
                },
                y    : {
                    formatter: (value) => {
                        return value + '%';
                    }
                }
            },
            xaxis  : {
                type: 'datetime'
            }
        };

        // Language
        this.languageOptions = {
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
                type      : 'donut',
                sparkline : {
                    enabled: true
                }
            },
            colors     : ['#805AD5', '#B794F4'],
            labels     : this.data.language.labels,
            plotOptions: {
                pie: {
                    expandOnClick: false,
                    donut        : {
                        size: '70%'
                    }
                }
            },
            series     : this.data.language.series,
            states     : {
                hover : {
                    filter: {
                        type: 'none'
                    }
                },
                active: {
                    filter: {
                        type: 'none'
                    }
                }
            },
            tooltip    : {
                enabled        : true,
                fillSeriesColor: false,
                theme          : 'dark',
                custom         : ({seriesIndex, w}) => {
                    return `<div class="flex items-center h-32 min-h-32 max-h-32 px-12">
                                <div class="w-12 h-12 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
                                <div class="ml-8 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
                                <div class="ml-8 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
                            </div>`;
                }
            }
        };

        // New vs. returning
        this.newVsReturningOptions = {
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
                type      : 'donut',
                sparkline : {
                    enabled: true
                }
            },
            colors     : ['#3182CE', '#63B3ED'],
            labels     : this.data.newVsReturning.labels,
            plotOptions: {
                pie: {
                    expandOnClick: false,
                    donut        : {
                        size: '70%'
                    }
                }
            },
            series     : this.data.newVsReturning.series,
            states     : {
                hover : {
                    filter: {
                        type: 'none'
                    }
                },
                active: {
                    filter: {
                        type: 'none'
                    }
                }
            },
            tooltip    : {
                enabled        : true,
                fillSeriesColor: false,
                theme          : 'dark',
                custom         : ({seriesIndex, w}) => {
                    return `<div class="flex items-center h-32 min-h-32 max-h-32 px-12">
                                <div class="w-12 h-12 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
                                <div class="ml-8 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
                                <div class="ml-8 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
                            </div>`;
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

        // Refunds
        this.refundsOptions = {
            chart  : {
                animations: {
                    speed           : 400,
                    animateGradually: {
                        enabled: false
                    }
                },
                fontFamily: 'inherit',
                foreColor : 'inherit',
                width     : '100%',
                height    : '100%',
                type      : 'line',
                sparkline : {
                    enabled: true
                }
            },
            colors : ['#A0AEC0'],
            series : [
                {
                    name: 'Refunds',
                    data: this.data.refunds.data
                }
            ],
            stroke : {
                curve: 'straight',
                width: 2
            },
            tooltip: {
                enabled: false
            },
            xaxis  : {
                type: 'numeric'
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

        // Unique purchases
        this.uniquePurchasesOptions = {
            chart  : {
                animations: {
                    speed           : 400,
                    animateGradually: {
                        enabled: false
                    }
                },
                fontFamily: 'inherit',
                foreColor : 'inherit',
                width     : '100%',
                height    : '100%',
                type      : 'line',
                sparkline : {
                    enabled: true
                }
            },
            colors : ['#A0AEC0'],
            series : [
                {
                    name: 'Unique Purchases',
                    data: this.data.uniquePurchases.data
                }
            ],
            stroke : {
                curve: 'straight',
                width: 2
            },
            tooltip: {
                enabled: false
            },
            xaxis  : {
                type: 'numeric'
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
