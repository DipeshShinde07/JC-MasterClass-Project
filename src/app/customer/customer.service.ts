import { Injectable } from '@angular/core';

@Injectable({providedIn:"root"})
export class CustomerService {
  counter = 0;

  Increment() {
    this.counter++;
  }
  Decrement() {
    this.counter--;
  }
}
