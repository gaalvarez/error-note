import { UserRegister } from './user-register';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserRegisterService {
  constructor(private httpClient: HttpClient) { }

  registerUser(user: UserRegister) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post('https://jsonplaceholder.typicode.com/users', user, httpOptions);
  }
}
