import {Directive, inject, input} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
  selector: '[uiInputStyle]',
  host: {
    class: 'border-b-2 p-1 mb-10 w-full focus:border-amber-500',
    '[class.border-red-400]': 'showError'
  }
})
export class InputDirective {
  isSubmitted = input(false);
  ngControl = inject(NgControl);

  get showError() {
    return this.ngControl.invalid && (this.ngControl.dirty || this.ngControl.touched || this.isSubmitted());
  }
}
