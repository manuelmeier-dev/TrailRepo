import {ChangeDetectionStrategy, Component, inject, output, signal} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {Credentials} from '../../../../shared/interfaces/credentials';
import {InputDirective} from '../../../../shared/components/input/input.directive';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, InputDirective],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-white p-10 rounded shadow-md flex flex-col items-center',
  },
})

export class LoginComponent {
  #fb = inject(FormBuilder);

  loginForm = this.#fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  isSubmitted = signal(false);

  submitLogin = output<Credentials>()
  switchContext = output<'login' | 'register'>();

  login() {
    this.isSubmitted.set(true);
    if (this.loginForm.invalid) {
      return;
    }
    this.submitLogin.emit(this.loginForm.getRawValue());
  }

}
