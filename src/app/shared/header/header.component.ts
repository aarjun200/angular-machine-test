import { AuthService } from '../../core/http-service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  popupStatus;
  constructor(public router: Router, private authService: AuthService) {}

  // logout section
  logout(): void  {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
