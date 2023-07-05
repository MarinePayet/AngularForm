import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[ngForm][appRangeDate]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: RangeDateDirective, multi:true}
  ]
})
export class RangeDateDirective {

  currentYear: number = new Date().getFullYear();
  minYear: number = 1900

  constructor() { }

  rageDateValidator(minYear: AbstractControl, currentYear: AbstractControl, control: AbstractControl): ValidationErrors | null {
    if(control.value > minYear && control.value < this.currentYear){
      return {isRageDateValid: true};
    }
    return null;
  }

}
