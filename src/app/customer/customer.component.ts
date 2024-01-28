import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ICustomer } from '../model/customer.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-cutomer',
  templateUrl: './customer.component.html',
  // providers:[CustomerService]
})
export class CutomerComponent implements OnInit {
  CustomerList: ICustomer[] = [];
  UserName: string = '';

  ShowList: boolean = false;
  constructor(private customer:CustomerService) {
    console.log('counter',this.customer.counter)
    this.customer.Increment()
    console.log('counter',this.customer.counter)
  }

  ngOnInit(): void {
    console.log('ng on init called.');
    this.InitialiseUserName();
    this.ListInitializaion();
  }

  private ListInitializaion() {
    this.CustomerList.push({ Fname: 'Dipesh', Lname: 'Shinde' });
    this.CustomerList.push({ Fname: 'Preeti', Lname: 'Tetgure' });
    this.CustomerList.push({ Fname: 'Sagar', Lname: 'Gavand' });
  }

  private InitialiseUserName() {
    const jwt = new JwtHelperService();
    const data = jwt.decodeToken(localStorage.getItem('token') as string);
    this.UserName = data.firstName;
  }

  onSubmit(data: ICustomer) {
    this.ShowList = false;
    this.CustomerList.push(data);
  }

  Add() {
    this.ShowList = true;
  }

  Cancel() {
    this.ShowList = false;
  }

  logout() {
    localStorage.removeItem('token');
  }
}
