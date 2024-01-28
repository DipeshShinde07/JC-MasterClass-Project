import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerModule } from './customer/customer.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomerModule, LoginModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  exportAs: '',
})
export class AppComponent {
  title = 'first-app';
}
