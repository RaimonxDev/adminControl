import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { startWith, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null)

  get isLoading$ () {
    return this._isLoading.asObservable()
  }

  constructor() { }

  stateLoading (value:boolean) {
    this._isLoading.next(value)
  }




}
