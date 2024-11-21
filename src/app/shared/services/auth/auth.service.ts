import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '../supabase/supabase.service';
import { Credentials } from '../../interfaces/credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  #supabaseService = inject(SupabaseService);
  
  login(data: Credentials) {
    return this.#supabaseService.login(data);
  }

  register(data: Credentials) {
    return this.#supabaseService.register(data);
  }

  logout() {
    return this.#supabaseService.logout();
  }
}
