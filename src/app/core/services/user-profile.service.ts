import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private API_URL = "http://localhost:8080/api/v1/";

  constructor(private http: HttpClient) { }

  getDataProfile(id: string): Observable<any>{
    return this.http.get<any>(`${this.API_URL}usuarios/profileUsuario/${id}`);
  }

}
