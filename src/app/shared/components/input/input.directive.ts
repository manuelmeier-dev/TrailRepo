import {Directive, inject, input} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
  selector: '[uiInputStyle]',
  host: {
    class: 'block w-full rounded-md px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm',
    '[class.outline-red-400]': 'showError'
  }
})
export class InputDirective {
  isSubmitted = input(false);
  ngControl = inject(NgControl);

  get showError() {
    return this.ngControl.invalid && (this.ngControl.dirty || this.ngControl.touched || this.isSubmitted());
  }
}
