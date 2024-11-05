import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Publicacion, UsuarioPublicacion } from '../../../app/shared/models/publicacion.model';

@Injectable({
  providedIn: "root"
})

export class PublicacionService {

    private API_URL = "http://localhost:8080/api/v1/";

    constructor(private http: HttpClient) { }

    getAllPublicaciones(): Observable<Publicacion[]> {
        return this.http.get<Publicacion[]>(`${this.API_URL}publicacion/obtenerPublicaciones`);
    }

    getPublicacionById(id: number): Observable<Publicacion> {
        return this.http.get<Publicacion>(`${this.API_URL}publicacion/obtenerPublicacionPorId/${id}`);
    }

    createPublicacion(formData: any): Observable<any> {
        return this.http.post(`${this.API_URL}publicacion/crear`, formData);
    }

    getPublicacionByIdUser(id: number): Observable<UsuarioPublicacion>{
        return this.http.get<UsuarioPublicacion>(`${this.API_URL}usuarios/buscarUsuario/${id}`);
    }

    buscarPublicaciones(query: string, filters: any): Observable<any> {
        let params = new HttpParams();
        
        if (query) {
            params = params.set('query', query);
          }
      
          // Si hay filtros, los añadimos como parámetros opcionales
          if (filters.fecha) {
            params = params.set('fecha', filters.fecha);
          }
          if (filters.ciudad) {
            params = params.set('ciudad', filters.ciudad);
          }
          if (filters.tipo) {
            params = params.set('tipo', filters.tipo);
          }
      
          return this.http.get(`${this.API_URL}publicacion/buscar`, { params });
    }
    
}
