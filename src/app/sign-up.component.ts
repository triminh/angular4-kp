import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

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

export class SignUpComponent implements OnInit{
    formSignUp: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
         this.formSignUp = this.fb.group({
            email: 'tri@gmail.com',
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