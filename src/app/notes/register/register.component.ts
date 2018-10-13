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
    this.log.invokeConsoleMethod('warn', 'no ha hecho nada más en este componente');
    this.log.warn('no ha hecho nada más en este componente');
  }

}
