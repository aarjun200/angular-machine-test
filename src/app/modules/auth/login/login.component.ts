import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { config } from '../../../config/config';
import { User } from 'src/app/core/models/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isButtonEnable: boolean;
  userEmailId: string;
  password: string;
  isAlive = true;
  constructor(
    public router: Router,
    public formBuilder: FormBuilder
  ) {}

  // to login
  login(): void {
    if ( config.email === this.userEmailId && config.password === this.password) {
  // Created a dummy token
      localStorage.setItem('token', 'arewr4fwesrgegr');
      this.router.navigateByUrl('app/home');
    }
  }
  // passing values from button component
    passValueToButtonCom(event: {
    loginFormValues: User;
    validation: boolean;
  }): void {
    this.userEmailId = event.loginFormValues.email;
    this.password = event.loginFormValues.password;
    this.isButtonEnable = event.validation;
  }
}
