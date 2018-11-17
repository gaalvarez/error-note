import { InputErrorService } from './../../../core/input-error/input-error.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { UniqueUserValidatorService } from './../../shared/unique-user-validator.service';
import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/core/logger/logger.service';
import { UserRegister } from '../../shared/user-register';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserRegisterService } from '../../shared/user-register.service';
import { BaseComponent } from 'src/app/core/base-component/base.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends BaseComponent implements OnInit {

  registerForm = this.fb.group({
    name: ['', Validators.required],
    lastname: [''],
    username: new FormControl('',
      { validators: Validators.required, asyncValidators: [this.uniqueValidator.validate.bind(this.uniqueValidator)], updateOn: 'blur' }),
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

  constructor(
    private fb: FormBuilder,
    private log: LoggerService,
    private ur: UserRegisterService,
    private uniqueValidator: UniqueUserValidatorService,
    private notify: NotificationsService,
    private router: Router,
    private ies: InputErrorService
  ) {
    super(ies);
  }

  ngOnInit() {
    this.log.invokeConsoleMethod('warn', 'De esta forma el log sale como si lo invocara el servicio');
    this.log.warn('De esta forma el log se mostrará con la invocación correcta desde este componente');
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
        err => { }
      );
    this.log.info('usuario registrado');
  }
}
