import {CanActivateFn} from "@angular/router";

export const isAuthenticatedGuard = (): CanActivateFn => {
  return () => {
    return true;
  }
};
