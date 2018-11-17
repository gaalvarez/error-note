import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputErrorDirective } from './input-error/input-error.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InputErrorDirective],
  exports: [InputErrorDirective]
})
export class CoreModule { }
