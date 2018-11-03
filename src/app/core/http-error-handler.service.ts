import { LoggerService } from 'src/app/core/logger/logger.service';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';

/** Type of the handleError function returned by HttpErrorHandler.createHandleError */
export type HandleError =
  <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

/** Handles HttpClient errors */
@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandler {
  constructor(private log: LoggerService) { }

  /** Create curried handleError function that already knows the service name */
  createHandleError = (serviceName = '') => <T>
    (operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result);

  /**
   * Returns a function that handles Http operation failures.
   * This error handler lets the app continue to run as if no error occurred.
   * @param serviceName = name of the data service that attempted the operation
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {

    return (error: HttpErrorResponse): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      let message = '';
      if (error.error instanceof ErrorEvent) {
        message = error.error.message;
      } else {
        if (error.error) {
          message = `status code: ${error.status} error: "${error.error.error}" message: "${error.error.message}"`
        } else {
          message = `status code: ${error.status} error: "${error.message}"`;
        }
      } // TODO: better job of transforming error for user consumption
      this.log.error(`${serviceName}: ${operation} failed: ${message}`);
      
      // Let the app keep running by returning a safe result.
      return of(result);
    };

  }
}
