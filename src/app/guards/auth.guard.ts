import { CanActivateFn, Router } from '@angular/router';
import { LoginClubService } from '../services/login-club.service';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(LoginClubService)
  if (service.IsLoggedIn()) {
      return true
  }else {
    const router = inject(Router);
   router.navigate(['login'])
    return false;
  };
};
