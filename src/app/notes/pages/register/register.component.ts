import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/core/logger/logger.service';
import { UserRegister } from '../../shared/user-register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  genders = ['Femenino', 'Masculino', 'Otro'];
  user: UserRegister = {
    name: '',
    lastname: '',
    username: '',
    email: '',
    gender: 'Masculino',
    birthdate: new Date(),
  };

  constructor(private log: LoggerService) { }

  ngOnInit() {
    this.log.invokeConsoleMethod('warn', 'De esta forma el log sale como si lo invocara el servicio');
    this.log.warn('De esta forma el log se mostrará con la invocación correcta desde este componente');
  }

}
