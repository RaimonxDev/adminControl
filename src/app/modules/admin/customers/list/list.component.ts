import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from '../../../../core/user/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit, OnDestroy {
  customers$: Observable<User[]>;
  customersCount: number;
  customersTableColumns: string[];
  drawerMode: 'side' | 'over';
  selectedCustomer: User;
  private _unsubscribeAll: Subject<any>;

  @ViewChild('matDrawer', { static: true })
  matDrawer: MatDrawer;

  constructor(
    private _customerServices: CustomerService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
    this.customersCount = 0;
    this.customersTableColumns = [
      'comercio',
      'rut',
      'email',
      'telefono',
      'direccion',
      'actions',
    ];
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.customers$ = this._customerServices.customers$;

    this._customerServices.customers$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((customers: User[]) => {
        // console.log(customers);
        this.customersCount = customers.length;
        this._changeDetectorRef.markForCheck();
      });

    this._customerServices.customer$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((customer: User) => {
        // Update the selected contact
        this.selectedCustomer = customer;

        // Mark for check
        this._changeDetectorRef.markForCheck();
      });
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
  onBackdropClicked(): void {
    // Get the current activated route
    let route = this._activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }

    // Go to the parent route
    this._router.navigate(['../'], { relativeTo: route });
    this.matDrawer.toggle();
    // Mark for check
    this._changeDetectorRef.markForCheck();
  }

  goToCustomer(id: string): void {
    // Get the current activated route
    let route = this._activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
      console.log(route.firstChild);
    }

    // Go to contact
    this._router.navigate(['./', id], { relativeTo: route });

    // Mark for check
    this._changeDetectorRef.markForCheck();
  }

  CreateCustomer() {
    let route = this._activatedRoute;
    this._router.navigate(['./', 'create'], { relativeTo: route });
  }
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
