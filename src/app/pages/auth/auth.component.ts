import {Component, inject, Signal, signal} from '@angular/core';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthService} from '../../shared/services/auth/auth.service';
import {Credentials} from '../../shared/interfaces/credentials';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [LoginComponent, RegisterComponent],
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  #authService = inject(AuthService);
  #router = inject(Router);

  context = signal<'login' | 'register'>('login');

  login(data: Credentials) {
    this.#authService.login(data)
      .then((res) => {
        if (res.data.user && res.data.user.role === 'authenticated') {
          this.#router.navigate(['/home']);
        }
      }).catch((err) => {
      console.log(err);
    });
  }

  register(data: Credentials) {
    this.#authService.register(data)
      .then((res) => {
        if (res.data.user && res.data.user.role === 'authenticated') {
          this.#router.navigate(['/dashboard']);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  changeContext(context: 'login' | 'register') {
    this.context.set(context);
  }
}
