import { Injectable } from '@angular/core';
import { ValidationErrors, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InputErrorService {

  // al tener estos errores en un servicio se puede hacer uso de un api al 
  // backend para obtener estos mensajes de una base de datos por ejemplo, o se 
  // puede desde este mismo servicio consultarlo a un archivo de propiedades
  errorsMessages = {
    required: 'el valor es requerido',
    email: 'Formato de email inválido',
    nounique: 'Ya existe un registro con este nombre de usuario'
  };

  constructor() { }

  getErrorMessage(control: FormControl) {
    if (!control.errors) {
      return '';
    }
    const mainErrorKey = Object.keys(control.errors)[0];
    if (this.errorsMessages.hasOwnProperty(mainErrorKey)) {
      return this.errorsMessages[mainErrorKey];
    } else {
      return '';
    }
  }

}
