import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  $IsValid: Observable<boolean>;

  LoginForm;

  constructor(private authenticationService: AuthenticationService,private customer:CustomerService) {
    this.$IsValid = this.authenticationService.$IsValid;
    this.LoginForm = this.authenticationService.InitializedForm();
    console.log('counter',this.customer.counter)
    this.customer.Increment()
    console.log('counter',this.customer.counter)
  }

  Login() {
    const data = this.LoginForm.value;
    this.authenticationService.DoLogin({
      Password: data.Password,
      userName: data.userName,
    });
  }
}
