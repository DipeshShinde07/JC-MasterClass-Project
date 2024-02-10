import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { ICustomer } from "../model/customer.model";
import { JwtHelperService } from "@auth0/angular-jwt";
import { CustomerService } from "./customer.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-cutomer",
  templateUrl: "./customer.component.html",
  providers: [],
})
export class CutomerComponent implements OnInit {
  CustomerList: ICustomer[] = [];
  UserName: string = "";

  ShowList: boolean = false;
  constructor(
    private customer: CustomerService,
    private httpClient: HttpClient
  ) {
    // try {
    console.log("counter", this.customer.counter);
    this.customer.Increment();
    console.log("counter", this.customer.counter);
    // throw new Error("testing");
    // } catch (e) {
    //   alert("Something went wrong!");
    // redricte to error componete
    // error loggin
    // }
  }

  ngOnInit(): void {
    console.log("ng on init called.");
    this.InitialiseUserName();
    this.ListInitializaion();
    this.GetCustomerList();
  }
  GetCustomerList() {
    this.httpClient
      .get("http://localhost:4000/customer-list")
      .subscribe((result) => {
        console.log(result);
      });
  }

  private ListInitializaion() {
    this.CustomerList.push({ Fname: "Dipesh", Lname: "Shinde" });
    this.CustomerList.push({ Fname: "Preeti", Lname: "Tetgure" });
    this.CustomerList.push({ Fname: "Sagar", Lname: "Gavand" });
  }

  private InitialiseUserName() {
    const jwt = new JwtHelperService();
    const data = jwt.decodeToken(localStorage.getItem("token") as string);
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
    localStorage.removeItem("token");
  }
}
