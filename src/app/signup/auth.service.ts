import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000';
  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: {}): Observable<any> {
    return this.http.post<any>(this.URL + '/auth/signup', user);
  }

  signIn(user: {}): Observable<any> {
    return this.http.post<any>(`${URL}/signin`, user);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

}
