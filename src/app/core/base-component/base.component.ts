import { InputErrorService } from '../input-error/input-error.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export class BaseComponent implements OnInit {

  constructor(private iesb: InputErrorService) { }

  ngOnInit() {
  }

  messageError(control: FormControl): string {
    return this.iesb.getErrorMessage(control);
  }
}
