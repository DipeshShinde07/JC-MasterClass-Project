import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export const AuthGuard = () => {
  const routeInjector: Router = inject(Router);
  const token = localStorage.getItem('token');
  const jwt = new JwtHelperService();
  if (token && !jwt.isTokenExpired(token)) {
    return true;
  } else {
    return routeInjector.createUrlTree(['/login']);
  }
};
