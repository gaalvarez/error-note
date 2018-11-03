import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/core/logger/logger.service';
import { UserRegister } from '../../shared/user-register';
import { FormBuilder, Validators } from '@angular/forms';
import { UserRegisterService } from '../../shared/user-register.service';
import { UniqueUserValidatorService } from '../../shared/unique-user-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    name: ['', Validators.required],
    lastname: [''],
    username: ['', Validators.required, this.uniqueValidator.validate.bind(this.uniqueValidator)],
    email: [
      '',
      [Validators.required, Validators.email]
    ],
    birthdate: [''],
    gender: ['']
  });
  errors = {
    required: 'el valor es requerido',
    email: 'Formato de email inválido',
    nounique: 'Nombre de usuario ya registrado'
  };
  genders = ['Femenino', 'Masculino', 'Otro'];
  user: UserRegister = {
    name: '',
    lastname: '',
    username: '',
    email: '',
    gender: this.genders[1],
    birthdate: new Date(),
  };
  constructor(
    private fb: FormBuilder,
    private log: LoggerService,
    private ur: UserRegisterService,
    private uniqueValidator: UniqueUserValidatorService
  ) { }

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

  onAccept() {
    this.log.info('a registrar en backend:' + JSON.stringify(this.registerForm.value as UserRegister));
    this.ur
      .registerUser(this.registerForm.value as UserRegister)
      .subscribe();
  }

}
