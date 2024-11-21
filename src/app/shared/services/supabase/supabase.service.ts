import { Injectable } from '@angular/core';
import { AuthChangeEvent, AuthSession, createClient, Session, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../../environments/environments';
import { Credentials } from '../../interfaces/credentials';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  #supabase: SupabaseClient;

  constructor() {
    this.#supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
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
