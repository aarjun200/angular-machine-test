import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signin-button',
  templateUrl: './signin-button.component.html',
  styleUrls: ['./signin-button.component.scss'],
})
export class SigninButtonComponent {
  @Input() isButtonEnable: boolean;
  @Output() loginValidated = new EventEmitter<boolean>();

  login(): void {
    this.loginValidated.emit(); // an event pass to parent component for calling login api
  }
}
