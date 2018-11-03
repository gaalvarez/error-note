import { UserRegister } from './user-register';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from 'src/app/core/http-error-handler.service';
import { Observable } from 'rxjs';

@Injectable()
export class UserRegisterService {

  private handleError: HandleError;

  constructor(
    private httpClient: HttpClient,
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
      .post(`${environment.backend_url}/users`, user, httpOptions)
      .pipe(
        catchError(this.handleError('registerUser', user))
      );
  }

  isUsernameUsed(username: String) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient
      .get(`${environment.backend_url}/users/validate/${username}`)
      .pipe(
        catchError(this.handleError('isUsernameUsed'))
      );
  }
}
