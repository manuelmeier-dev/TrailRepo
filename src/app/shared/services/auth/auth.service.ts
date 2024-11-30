import {Injectable, signal} from '@angular/core';
import {Credentials} from '../../interfaces/credentials';
import {AuthChangeEvent, AuthSession, createClient, Session, SupabaseClient} from '@supabase/supabase-js';
import {environment} from '../../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  supabase: SupabaseClient;
  currentUser = signal<{email: string} | null>(null);

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  login(data: Credentials) {
    return this.supabase.auth.signInWithPassword(data);
  }

  register(data: Credentials) {
    return this.supabase.auth.signUp(data);
  }

  logout() {
    return this.supabase.auth.signOut();
  }
}
