import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class AuthenticationService {
  $IsValid: Observable<boolean>;
  private IsValidJSubject: BehaviorSubject<boolean>;
  
  constructor(private route: Router, private httpClient: HttpClient) {
    this.IsValidJSubject = new BehaviorSubject<boolean>(true);
    this.$IsValid = this.IsValidJSubject.asObservable();
  }

  InitializedForm() {
    return new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  DoLogin(data: {
    userName: string | null | undefined;
    Password: string | null | undefined;
  }) {
    this.httpClient
      .post<{ token: string }>('http://localhost:4000/signin', {
        UserName: data.userName,
        Password: data.Password,
      })
      .subscribe((res: { token: string }) => {
        if (res && res.token) {
          localStorage.setItem('token', res.token);
          this.route.navigate(['/customer']);
          this.IsValidJSubject.next(true);

        } else {
          this.IsValidJSubject.next(false);
        }
      });
  }
}
