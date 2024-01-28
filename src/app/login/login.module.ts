import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  providers: [AuthenticationService],
})
export class LoginModule {}
