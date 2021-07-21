import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  showLoader = false;

  constructor() {}

  // tslint:disable-next-line:typedef
  show() {
    this.showLoader = true;
  }

  // tslint:disable-next-line:typedef
  hide() {
    this.showLoader = false;
  }
}
