import {Injectable, signal} from '@angular/core';
import {Credentials} from '../../interfaces/credentials';
import {AuthChangeEvent, createClient, Session, SupabaseClient} from '@supabase/supabase-js';
import {environment} from '../../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  #supabase: SupabaseClient;
  currentUser = signal<{email: string} | null>(null);

  constructor() {
    this.#supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.#supabase.auth.onAuthStateChange(callback)
  }

  login(data: Credentials) {
    return this.#supabase.auth.signInWithPassword(data);
  }

  register(data: Credentials) {
    return this.#supabase.auth.signUp(data);
  }

  logout() {
    return this.#supabase.auth.signOut();
  }
}
