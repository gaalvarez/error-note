import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { UniqueUserValidatorService } from './../../shared/unique-user-validator.service';
import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/core/logger/logger.service';
import { UserRegister } from '../../shared/user-register';
import { FormBuilder, Validators } from '@angular/forms';
import { UserRegisterService } from '../../shared/user-register.service';

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
    email: ['', [Validators.required, Validators.email]],
    birthdate: [''],
    gender: ['']
  });
  genders = ['Femenino', 'Masculino', 'Otro'];
  user: UserRegister = {
    name: '',
    lastname: '',
    username: '',
    email: '',
    gender: 'Masculino',
    birthdate: new Date(),
  };
  errors = {
    required: 'el valor es requerido',
    email: 'Formato de email inválido',
    nounique: 'Ya existe un registro con este nombre de usuario'
  };

  constructor(
    private fb: FormBuilder,
    private log: LoggerService,
    private ur: UserRegisterService,
    private uniqueValidator: UniqueUserValidatorService,
    private notify: NotificationsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.log.invokeConsoleMethod('warn', 'De esta forma el log sale como si lo invocara el servicio');
    this.log.warn('De esta forma el log se mostrará con la invocación correcta desde este componente');
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

  onAction() {
    this.log.info('registrar la site info: ' + JSON.stringify(this.registerForm.value));
    this.ur
      .registerUser(this.registerForm.value as UserRegister)
      .subscribe(
        res => {
          this.notify.success('Correcto', 'registro exitoso');
          this.router.navigate(['/notes/search']);
        },
        err => {}
      );
    this.log.info('usuario registrado');
  }
}
