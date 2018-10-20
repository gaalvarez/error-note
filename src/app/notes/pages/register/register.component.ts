import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/core/logger/logger.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private log: LoggerService) { }

  ngOnInit() {
    this.log.invokeConsoleMethod('warn', 'De esta forma el log sale como si lo invocara el servicio');
    this.log.warn('De esta forma el log se mostrará con la invocación correcta desde este componente');
  }

}
