import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface CiudadForm {
  idDepartamento: number;
  nombreDepartamento: string;
  ciudades: { idCiudad: number; nombre: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class CrearPublicacionService {
  private API_URL = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  getDepartamentos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/departamento/findAllDpto`);
  }

  getCiudadesByDepartamento(idDepartamento: number): Observable<CiudadForm> {
    return this.http.get<CiudadForm>(`${this.API_URL}/departamento/${idDepartamento}`);
  }

}
