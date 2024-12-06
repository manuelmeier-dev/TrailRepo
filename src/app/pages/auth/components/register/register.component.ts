import {ChangeDetectionStrategy, Component, inject, output, signal} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Credentials } from '../../../../shared/interfaces/credentials';
import {InputDirective} from '../../../../shared/components/input/input.directive';
import {ButtonDirective} from '../../../../shared/components/buttons/primary/button.directive';

@Component({
    selector: 'app-register',
  imports: [ReactiveFormsModule, InputDirective, ButtonDirective],
    templateUrl: './register.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
      class: 'bg-white p-10 rounded shadow-md flex flex-col items-center'
    }
})
export class RegisterComponent {
    #fb = inject(FormBuilder);

    registerForm = this.#fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    isSubmitted = signal(false);

    submitRegister = output<Credentials>();
    switchContext = output<'login' | 'register'>();

    register() {
      this.isSubmitted.set(true);
      if (this.registerForm.invalid) {
        return;
      }
      this.submitRegister.emit(this.registerForm.getRawValue());
    }
}
