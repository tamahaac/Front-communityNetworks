import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authServiceInstance = inject(AuthService);
  const router = inject(Router);

  if(authServiceInstance.isAutenthicated()){
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
