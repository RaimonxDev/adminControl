import { Component, OnInit } from '@angular/core';
import { TreoMediaWatcherService } from '@treo/services/media-watcher';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = true;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private _treoMediaWatcherService: TreoMediaWatcherService) { }

  ngOnInit(): void {
    this.SideNavResponsive()

  }

  SideNavResponsive():void  {
    this._treoMediaWatcherService.onMediaChange$
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe(({matchingAliases}) => {

            // Set the drawerMode and drawerOpened
            if ( matchingAliases.includes('lg') )
            {
                this.drawerMode = 'side';
                this.drawerOpened = true;
            }
            else
            {
                this.drawerMode = 'over';
                this.drawerOpened = false;
            }
        });

  }

}
