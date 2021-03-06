import { Component, OnInit } from '@angular/core';
import { ShippedService } from '../../services/shipped.service';
import { ShippedListComponent } from '../shipped-list/shipped-list.component';
import { Observable } from 'rxjs';
import { UserOrder } from '../../../../../core/user/user.model';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss'],
})
export class ViewOrderComponent implements OnInit {
  id: string;
  order$: Observable<UserOrder>;
  constructor(
    private _shippeServices: ShippedService,
    private _shippedComponent: ShippedListComponent
  ) {}

  ngOnInit(): void {
    this._shippedComponent.matDrawer.open();
    this.order$ = this._shippeServices.selectedOrder$;
  }
}
