import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RegisterModel } from '../models/register.model';
import { LoginModel } from '../models/login.model';

@Injectable({providedIn: 'root'})
export class RegisterService {
  apiKey = 'AIzaSyABtMm0MoA52vNsuvpWiMuk2LGGcmxG_-o';
  registerUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.apiKey;
  loginUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.apiKey;

  constructor(private http: HttpClient) {}

  register(username: string, password: string, email: string) {
    return this.http.post<RegisterModel>(this.registerUrl, {username, password, email, returnSecureToken: true});
  }

  login(email: string, password: string) {
    return this.http.post<LoginModel>(this.loginUrl, {email, password, returnSecureToken: true});
  }
}
