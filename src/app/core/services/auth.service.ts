import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private LOGIN_URL = 'http://localhost:8080/auth/login';
  private tokenKey = 'authToken';

  constructor(private httpClient: HttpClient, private router: Router) { }

  

  login(user: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const data = {
      "correo": user,
      "contrasena": password
    };

    return this.httpClient.post<any>(this.LOGIN_URL, data, { headers }).pipe(
      tap(response => {
        if (response.token) {
          this.setToken(response.token);
        }
      })
    );
  }

  public setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }


  public getToken(): string | null{
  return localStorage.getItem(this.tokenKey);
  }

  public isAutenthicated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;
    return Date.now() < exp;
  }

  public logout(): void{
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  public getUserIdFromToken(): string | null{
    const token = this.getToken();
    if (!token){
      return null;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.idUser;
  }
}