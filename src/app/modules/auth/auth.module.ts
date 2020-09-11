import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { InputBoxesComponent } from './login/input-boxes/input-boxes.component';
import { SigninButtonComponent } from './login/signin-button/signin-button.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent, InputBoxesComponent, SigninButtonComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
