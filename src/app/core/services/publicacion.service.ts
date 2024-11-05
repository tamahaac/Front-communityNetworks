import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Publicacion } from '../../../app/shared/models/publicacion.model';

@Injectable({
  providedIn: "root"
})

export class PublicacionService {

    private API_URL = "http://localhost:8080/api/v1/publicacion";

    constructor(private http: HttpClient) { }

    getAllPublicaciones(): Observable<Publicacion[]> {
        return this.http.get<Publicacion[]>(`${this.API_URL}/obtenerPublicaciones`);
    }

    getPublicacionById(id: number): Observable<Publicacion> {
        return this.http.get<Publicacion>(`${this.API_URL}/obtenerPublicacionPorId/${id}`);
    }

    createPublicacion(formData: any): Observable<any> {
        return this.http.post(`${this.API_URL}/crear`, formData);
    }

    getPublicacionByIdUser(id: number): Observable<Publicacion>{
        return this.http.get<Publicacion>(`${this.API_URL}/obtenerPublicacionPorUsuario/${id}`);
    }
}
