import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
    <button>Submit</button>
</form>
  `
})

export class SignUpComponent {
    formSignUp: FormGroup;

    constructor() {
        this.formSignUp = new FormGroup({
            email: new FormControl(),
            password: new FormControl(),
            subject: new FormGroup({
                nodeJs: new FormControl(),
                angular: new FormControl(),
                reactJs: new FormControl(),
            }); 
        });
    }
    onSubmit() {
        console.log(this.formSignUp.value);
    }
}