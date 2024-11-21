import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { SupabaseService } from "../services/supabase/supabase.service";

export const isAuthenticatedGuard = (): CanActivateFn => {
    return () => {
        const router = inject(Router);

        //if logged in
        return true;


        return router.parseUrl('auth/login');
    }
}