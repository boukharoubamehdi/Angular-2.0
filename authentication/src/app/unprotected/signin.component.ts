
import {Component, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {AuthService} from "../shared/aut.service";

@Component({
  selector: 'aut-signin',
  template: `
        <h3>Please sign up to use all features</h3>
        <form [formGroup]="myForm" (ngSubmit)="onSignin()">
            <div class="form-group">
                <label for="email">E-Mail</label>
                <input formControlName="email" type="email" id="email" class="form-control">
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input formControlName="password" type="password" id="password" class="form-control">
            </div>
            <button type="submit" [disabled]="!myForm.valid" class="btn btn-primary">Sign In</button>
        </form>
    `
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;
  error = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  onSignin() {
    // i pass myForm in param because the myForm contains the same architecture as User.
  this.authService.signinUser(this.myForm.value);
  }


  ngOnInit():any {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}

