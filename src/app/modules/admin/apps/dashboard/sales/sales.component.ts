import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApexOptions, ChartComponent } from 'ng-apexcharts';
import { DashboardSalesService } from 'app/modules/admin/apps/dashboard/sales/sales.service';

@Component({
    selector       : 'dashboard-sales',
    templateUrl    : './sales.component.html',
    styleUrls      : ['./sales.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardSalesComponent implements OnInit, OnDestroy
{
    data: any;
    totalRevenueChart: ApexOptions;
    totalOrdersChart: ApexOptions;

    @ViewChild('totalRevenueChartComponent')
    totalRevenueChartComponent: ChartComponent;

    @ViewChild('totalProductsChartComponent')
    totalOrdersChartComponent: ChartComponent;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {DashboardSalesService} _dashboardSalesService
     */
    constructor(
        private _dashboardSalesService: DashboardSalesService
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
        // Get the data
        this._dashboardSalesService.data$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data) => {

                // Store the data
                this.data = data;

                // Prepare the chart data
                this._prepareChartData();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Explicitly call destroy on charts to prevent memory leaks
        this.totalRevenueChartComponent.destroy();
        this.totalOrdersChartComponent.destroy();

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
        // Prepare total orders chart
        this.totalOrdersChart = {
            chart : {
                animations: {
                    speed           : 400,
                    animateGradually: {
                        enabled: false
                    }
                },
                fontFamily: 'inherit',
                height    : '100%',
                type      : 'area',
                sparkline : {
                    enabled: true
                }
            },
            series: [
                {
                    name: 'Total Orders',
                    data: this.data.totalOrders.data
                }
            ],
            xaxis : {
                type      : 'category',
                categories: this.data.totalOrders.labels
            }
        };

        // Prepare total revenue chart
        this.totalRevenueChart = {
            chart     : {
                animations: {
                    speed           : 400,
                    animateGradually: {
                        enabled: false
                    }
                },
                fontFamily: 'inherit',
                height    : '100%',
                type      : 'area',
                toolbar   : {
                    show: false
                },
                zoom      : {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            grid      : {
                padding: {
                    right : 32,
                    bottom: 0,
                    left  : 10
                }
            },
            markers   : {
                size : 4,
                hover: {
                    size: 6
                }
            },
            series    : [
                {
                    name: 'Total Revenue',
                    data: this.data.totalRevenue.data
                }
            ],
            tooltip   : {
                y: {
                    formatter: (val) => {
                        return '$' + val.toFixed(2);
                    }
                }
            },
            xaxis     : {
                type      : 'category',
                categories: this.data.totalRevenue.labels,
                axisBorder: {
                    show: false
                },
                tooltip   : {
                    enabled: false
                }
            },
            yaxis     : {
                tickAmount: 3,
                labels    : {
                    formatter: (val, index) => {
                        return '$' + (val / 1000).toFixed(1) + 'k';
                    }
                }
            }
        };
    }

}
