import { Validator , AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';


@Directive({
 
    selector:'[appSelectValidator]',
    providers:[{
          provide:NG_VALIDATORS,
          useExisting:SelectRequiredValidator,
          multi:true
    }]
})

export class SelectRequiredValidator implements Validator {
    @Input()  appSelectValidator :string;
    validate(control: AbstractControl): { [key: string]: any } | null {
        console.log(control.value)
        return control.value === this.appSelectValidator ? { 'defaultSelected': true } : null;
    }
}