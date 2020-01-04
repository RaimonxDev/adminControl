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
    conversionRateChart: ApexOptions;
    purchasesChart: ApexOptions;
    totalVisitsChart: ApexOptions;
    uniqueVisitorsChart: ApexOptions;

    @ViewChild('searchesTable', {read: MatSort})
    searchesTableMatSort: MatSort;

    @ViewChild('conversionRateChartComponent')
    conversionRateChartComponent: ChartComponent;

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
        this.conversionRateChartComponent.destroy();
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
        // Conversion rate
        this.conversionRateChart = {
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
                    columnWidth: '40%'
                }
            },
            series     : [
                {
                    name: 'Conversion Rate',
                    data: this.data.conversionRate.data
                }
            ],
            theme      : {
                palette: 'palette2'
            },
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

        // Purchases
        this.purchasesChart = {
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
            series : [
                {
                    name: 'Purchases',
                    data: this.data.purchases.data
                }
            ],
            tooltip: {
                theme: 'dark'
            },
            theme  : {
                palette: 'palette4'
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
        this.totalVisitsChart = {
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
        this.uniqueVisitorsChart = {
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
            series : [
                {
                    name: 'Total Visits',
                    data: this.data.totalVisits.data
                }
            ],
            tooltip: {
                theme: 'dark'
            },
            theme  : {
                palette: 'palette4'
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
