import {inject} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from '../services/auth/auth.service';

export const isAuthenticatedGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return true;
  // if (authService.session) {
  //   return true;
  // }

  return router.parseUrl('/auth');
}
