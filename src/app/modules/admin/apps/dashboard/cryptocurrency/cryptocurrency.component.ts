import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as _ from 'lodash';
import * as moment from 'moment';
import { ApexOptions, ChartComponent } from 'ng-apexcharts';
import { AsmConfigService } from '@assembly/services/config';
import { AsmMediaWatcherService } from '@assembly/services/media-watcher';
import { DashboardCryptocurrencyService } from 'app/modules/admin/apps/dashboard/cryptocurrency/cryptocurrency.service';

@Component({
    selector       : 'dashboard-cryptocurrency',
    templateUrl    : './cryptocurrency.component.html',
    styleUrls      : ['./cryptocurrency.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardCryptocurrencyComponent implements OnInit, OnDestroy
{
    appConfig: any;
    btcOptions: ApexOptions;
    data: any;
    drawerMode: 'over' | 'side';
    drawerOpened: boolean;
    watchlistChartOptions: ApexOptions;

    @ViewChild('btcChartComponent')
    btcChartComponent: ChartComponent;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AsmConfigService} _asmConfigService
     * @param {AsmMediaWatcherService} _asmMediaWatcherService
     * @param {DashboardCryptocurrencyService} _dashboardCryptocurrencyService
     * @param {ChangeDetectorRef} _changeDetectorRef
     */
    constructor(
        private _asmConfigService: AsmConfigService,
        private _asmMediaWatcherService: AsmMediaWatcherService,
        private _dashboardCryptocurrencyService: DashboardCryptocurrencyService,
        private _changeDetectorRef: ChangeDetectorRef
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.drawerMode = 'side';
        this.drawerOpened = true;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to media changes
        this._asmMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {

                // Set the drawerMode and drawerOpened if 'lt-lg' breakpoint is active
                if ( matchingAliases.includes('lt-lg') )
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

        // Get the app config
        this._asmConfigService.config$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {

                // Store the config
                this.appConfig = config;

                // Update the chart options
                if ( this.btcChartComponent )
                {
                    this.btcChartComponent.updateOptions(_.merge(this.btcOptions, {
                        grid : {
                            borderColor: this._getBorderColor()
                        },
                        xaxis: {
                            axisTicks : {
                                color: this._getBorderColor()
                            },
                            crosshairs: {
                                fill: {
                                    color: this._getBorderColor()
                                }
                            }
                        },
                        yaxis: {
                            axisTicks: {
                                color: this._getBorderColor()
                            }
                        }
                    }));
                }
            });

        // Get the data
        this._dashboardCryptocurrencyService.data$
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
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    private _getBorderColor(): string
    {
        return this.appConfig.theme === 'dark' ? 'rgba(237, 242, 247, 0.12)' : '#CBD5E0';
    }

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
                borderColor    : this._getBorderColor(),
                position       : 'back',
                show           : true,
                strokeDashArray: 6,
                xaxis          : {
                    lines: {
                        show: true
                    }
                },
                yaxis          : {
                    lines: {
                        show: true
                    }
                }
            },
            legend    : {
                show: false
            },
            series    : this.data.btc.price.series,
            stroke    : {
                width: 2,
                curve: 'straight'
            },
            tooltip   : {
                shared: true,
                theme : 'dark',
                y     : {
                    formatter: (value) => {
                        return '$' + value.toFixed(2);
                    }
                }
            },
            xaxis     : {
                type      : 'numeric',
                crosshairs: {
                    show    : true,
                    position: 'back',
                    fill    : {
                        type : 'color',
                        color: this._getBorderColor()
                    },
                    width   : 3,
                    stroke  : {
                        dashArray: 0,
                        width    : 0
                    },
                    opacity : 0.9
                },
                tickAmount: 8,
                axisTicks : {
                    show : true,
                    color: this._getBorderColor()
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
                        return moment().subtract(Math.abs(parseInt(value, 10)), 'minutes').format('HH:mm');
                    },
                    style                : {
                        colors: 'currentColor'
                    }
                }
            },
            yaxis     : {
                axisTicks     : {
                    show : true,
                    color: this._getBorderColor()
                },
                axisBorder    : {
                    show: false
                },
                forceNiceScale: true,
                labels        : {
                    minWidth : 40,
                    formatter: (value, index) => {
                        return '$' + value.toFixed(0);
                    },
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
        };
    }
}
