import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Credentials } from '../../../../shared/interfaces/credentials';

@Component({
    selector: 'app-login',
    imports: [ReactiveFormsModule],
    templateUrl: './login.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  #fb = inject(FormBuilder);

  loginForm = this.#fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  submitLogin = output<Credentials>()
  switchContext = output<'login' | 'register'>();

  login() {
    if (this.loginForm.invalid) {
      alert('Form invalid');
      return;
    }
    this.submitLogin.emit(this.loginForm.getRawValue());
  }
}
