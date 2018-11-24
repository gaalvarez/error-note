import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputErrorDirective } from './input-error/input-error.directive';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InputErrorDirective, LoginComponent],
  exports: [InputErrorDirective, LoginComponent]
})
export class CoreModule { }
