import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup-form',
    templateUrl: './signup-form.component.html',
    styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
    signupForm: FormGroup = this.formBuilder.group({
        name: new FormControl('', Validators.required),
        email: new FormControl(''),
        phone: new FormControl('', [Validators.required, customValidator]),
    });

    constructor(private formBuilder: FormBuilder) {}

    onSubscribe() {
        console.log(this.signupForm.valid);
        console.log(this.signupForm.value);
        console.log('foooo');
    }
}

export function customValidator(control: AbstractControl) {
    const currentValue: string = control.value;
    let isValid = null;
    if (currentValue.startsWith('+36')) {
        isValid = true;
    } 

    return isValid ? null : {isValid};
}
