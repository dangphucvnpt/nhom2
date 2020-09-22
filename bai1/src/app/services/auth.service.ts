import { Injectable } from '@angular/core';
import { API } from './api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private api: API
  ) { }

  login(username: string, password: string) {
    //LOGIN PATH: /api/Account/login
    return this.api.post('/api/Account/login', {
      "username": username,
      "password": password
    });
  }

  setToken(token) {
    return localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
  }

}
