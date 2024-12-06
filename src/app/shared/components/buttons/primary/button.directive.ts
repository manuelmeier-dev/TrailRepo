import { Directive } from '@angular/core';

@Directive({
  selector: '[uiPrimaryButton]',
  host: {
    class: 'bg-indigo-600 rounded-full p-2 text-white font-semibold'
  }
})
export class ButtonDirective {}
