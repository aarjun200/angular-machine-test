import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeTopComponent } from './home-top/home-top.component';
import { HomeKeyComponent } from './home-key/home-key.component';
import { SharedModule } from './../../shared/shared.module';


@NgModule({
  declarations: [HomePageComponent, HomeTopComponent, HomeKeyComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
