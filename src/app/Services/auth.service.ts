import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:3000';
  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: {}): Observable<any> {
    return this.http.post<any>(`${this.url}/auth/signup`, user);
  }

  signIn(user: {}): Observable<any> {
    return this.http.post<any>(`${this.url}/auth/signin`, user);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.router.navigate(['/signin']);
  }

}
