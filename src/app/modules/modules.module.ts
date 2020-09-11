import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';
import { ModuleComponent } from './module.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ModuleComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    SharedModule
  ]
})
export class ModulesModule { }
