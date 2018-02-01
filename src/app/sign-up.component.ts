import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
selector: 'app-sign-up',
template: `
<form (ngSubmit)="onSubmit();" [formGroup]="formSignUp">
    <input placeholder="Email" formControlName="email">
    <br><br>
    <input type="password" placeholder="Password" formControlName="password">
    <br><br>
    <div formGroupName="subject">
        <label><input type="checkbox" name="NodeJs" formControlName="nodeJs">NodeJs</label>
        <label><input type="checkbox" name="Angular" formControlName="angular">Angular</label>
        <label><input type="checkbox" name="ReactJs" formControlName="reactJs">ReactJs</label>
    </div>
    <br>
    <button [disabled]="formSignUp.invalid">Submit</button>
</form>
<code> {{ formSignUp.controls.email.errors | json }} </code>
  `
})

export class SignUpComponent implements OnInit{
    formSignUp: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
         this.formSignUp = this.fb.group({
            email: ['', [Validators.email, gmailValidator]],
            password: '',
            subject: this.fb.group({
                nodeJs: true,
                angular: true,
                reactJs: false
            })
        });

    }
    onSubmit() {
        console.log(this.formSignUp.value);
    }
}

    function gmailValidator(formControl: FormControl) {
        if(formControl.value.includes('@gmail.com')) {
            return null;
        }
    return { gmail: true };
    }