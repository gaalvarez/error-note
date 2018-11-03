import { HttpErrorHandler } from './../../core/http-error-handler.service';
import { environment } from './../../../environments/environment';
import { UserRegister } from './user-register';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HandleError } from '../../core/http-error-handler.service';

@Injectable()
export class UserRegisterService {

  private handleError: HandleError;
  constructor(private httpClient: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('UserRegisterService');
  }

  registerUser(user: UserRegister) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient
      .post(`${environment.backend_url}/users`, user, httpOptions);
  }

  isUsernameUsed(username: String) {
    return this.httpClient
      .get(`${environment.backend_url}/users/validate/${username}`)
      .pipe(
        catchError(this.handleError('isUsernameUsed'))
      );
  }
}
