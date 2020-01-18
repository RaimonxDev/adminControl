import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApexOptions, ChartComponent } from 'ng-apexcharts';
import { ConfigService } from 'app/core/config/config.service';
import { AppConfig } from 'app/config/app';
import { DashboardCryptocurrencyService } from 'app/modules/admin/apps/dashboard/cryptocurrency/cryptocurrency.service';

@Component({
    selector       : 'dashboard-cryptocurrency',
    templateUrl    : './cryptocurrency.component.html',
    styleUrls      : ['./cryptocurrency.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardCryptocurrencyComponent implements OnInit, AfterViewInit, OnDestroy
{
    appConfig: AppConfig;
    data: any;
    recentOrdersDataSource: MatTableDataSource<any>;
    recentOrdersTableColumns: string[];
    btcOptions: ApexOptions;
    watchlistChartOptions: ApexOptions;

    @ViewChild('recentOrdersTable', {read: MatSort})
    recentOrdersTableMatSort: MatSort;

    @ViewChild('btcChartComponent')
    btcChartComponent: ChartComponent;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {DashboardCryptocurrencyService} _dashboardCryptocurrencyService
     * @param {ConfigService} _configService
     */
    constructor(
        private _dashboardCryptocurrencyService: DashboardCryptocurrencyService,
        private _configService: ConfigService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Set the defaults
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
        // Get the app config
        this._configService.config$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {

                // Store the config
                this.appConfig = config;

                // Update the chart options
                if ( this.btcChartComponent )
                {
                    this.btcChartComponent.updateOptions({
                        grid: {
                            borderColor: (config.theme === 'dark' ? 'rgba(237, 242, 247, 0.12)' : '#E2E8F0')
                        }
                    });
                }
            });

        // Get the data
        this._dashboardCryptocurrencyService.data$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data) => {

                // Store the data
                this.data = data;

                // Store the table data
                // this.recentOrdersDataSource.data = data.recentOrders;

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
        // this.recentOrdersDataSource.sort = this.recentOrdersTableMatSort;
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
     * Prepare the chart data from the data
     *
     * @private
     */
    private _prepareChartData(): void
    {
        // BTC
        this.btcOptions = {
            chart     : {
                animations: {
                    enabled: false
                },
                fontFamily: 'inherit',
                foreColor : 'inherit',
                width     : '100%',
                height    : '100%',
                type      : 'line',
                toolbar   : {
                    show: false
                },
                zoom      : {
                    enabled: false
                }
            },
            colors    : ['#5A67D8'],
            dataLabels: {
                enabled: false
            },
            grid      : {
                borderColor    : (this.appConfig.theme === 'dark' ? 'rgba(237, 242, 247, 0.12)' : '#E2E8F0'),
                position       : 'back',
                show           : true,
                strokeDashArray: 6,
                xaxis          : {
                    lines: {
                        show: false
                    }
                },
                yaxis          : {
                    lines: {
                        show: false
                    }
                }
            },
            legend    : {
                show: false
            },
            series    : this.data.btc.price.series,
            stroke    : {
                width: 3,
                curve: 'smooth'
            },
            tooltip   : {
                shared: true,
                theme : 'dark',
                x     : {
                    formatter: (seriesIndex) => {
                        return this.data.btc.price.series[0].data[seriesIndex - 1].x;
                    }
                },
                y     : {
                    formatter: (value) => {
                        return '$' + value.toFixed(2);
                    }
                }
            },
            xaxis     : {
                type      : 'category',
                crosshairs: {
                    show  : true,
                    stroke: {
                        dashArray: 0
                    }
                },
                axisTicks : {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                tooltip   : {
                    enabled: false
                },
                labels    : {
                    show                 : true,
                    trim                 : false,
                    rotate               : 0,
                    minHeight            : 40,
                    hideOverlappingLabels: true,
                    formatter            : (value) => {
                        return (value && value.split(':')[1][1] === '0' ? value : '');
                    },
                    style                : {
                        colors: 'currentColor'
                    }
                }
            },
            yaxis     : {
                axisTicks     : {
                    show : true,
                    color: (this.appConfig.theme === 'dark' ? 'rgba(237, 242, 247, 0.12)' : '#E2E8F0')
                },
                axisBorder    : {
                    show : true,
                    color: (this.appConfig.theme === 'dark' ? 'rgba(237, 242, 247, 0.12)' : '#E2E8F0')
                },
                forceNiceScale: true,
                labels        : {
                    formatter: (value, index) => {
                        return '$' + value.toFixed(0);
                    },
                    minWidth : 40,
                    style    : {
                        color: 'currentColor'
                    }
                }
            }
        };

        // Watchlist options
        this.watchlistChartOptions = {
            chart  : {
                animations: {
                    enabled: false
                },
                width     : '100%',
                height    : '100%',
                type      : 'line',
                sparkline : {
                    enabled: true
                }
            },
            colors : ['#A0AEC0'],
            stroke : {
                width: 2,
                curve: 'smooth'
            },
            tooltip: {
                enabled: false
            },
            xaxis  : {
                type: 'category'
            }
            /*yaxis  : {
                min: 130,
                max: 160
            }*/
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
