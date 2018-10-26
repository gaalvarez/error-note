import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/core/logger/logger.service';
import { UserRegister } from '../../shared/user-register';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    name: ['', Validators.required],
    lastname: [''],
    username: ['', Validators.required],
    email: [
      '',
      [Validators.required, Validators.email]
    ],
    birthdate: [''],
    gender: ['']
  });
  errors = { required: 'el valor es requerido', email: 'Formato de email inválido' };
  genders = ['Femenino', 'Masculino', 'Otro'];
  user: UserRegister = {
    name: '',
    lastname: '',
    username: '',
    email: '',
    gender: this.genders[1],
    birthdate: new Date(),
  };
  constructor(private fb: FormBuilder, private log: LoggerService) { }

  ngOnInit() {
  }

  hasError(control: string): boolean {
    if (this.registerForm.controls[control].errors) {
      return true;
    } else {
      return false;
    }
  }

  messageError(control: string): string {
    if (this.registerForm.controls[control].errors) {
      return this.errors[Object.keys(this.registerForm.controls[control].errors)[0]];
    } else {
      return '';
    }
  }

}
