import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Credentials } from '../../../../shared/interfaces/credentials';

@Component({
    selector: 'app-register',
    imports: [ReactiveFormsModule],
    templateUrl: './register.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
    #fb = inject(FormBuilder);

    registerForm = this.#fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    submitRegister = output<Credentials>();
    switchContext = output<'login' | 'register'>();

    register() {
      if (this.registerForm.invalid) {
        return;
      }
      this.submitRegister.emit(this.registerForm.getRawValue());
    }
}
