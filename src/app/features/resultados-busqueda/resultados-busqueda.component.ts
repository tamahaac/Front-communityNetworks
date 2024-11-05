import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PublicacionService } from '../../core/services/publicacion.service';
import { CommonModule } from '@angular/common';
import { TarjetaPublicacionComponent } from "../components/tarjeta-publicacion/tarjeta-publicacion.component";

@Component({
  selector: 'app-resultados-busqueda',
  standalone: true,
  imports: [CommonModule, TarjetaPublicacionComponent, RouterLink],
  templateUrl: './resultados-busqueda.component.html',
  styleUrl: './resultados-busqueda.component.css'
})

export class ResultadosBusquedaComponent implements OnInit {
  publicaciones: any[] = [];
  query: string = '';
  filters = {
    fecha: '',
    ciudad: '',
    tipo: ''
  };


  constructor(private route: ActivatedRoute, private publicacionService: PublicacionService) {}

 ngOnInit(): void {
    // Capturamos los parámetros de búsqueda y filtros
    this.route.queryParams.subscribe(params => {
      this.query = params['query'] || '';  // Palabra clave de búsqueda
      this.filters.fecha = params['fecha'] || '';  // Filtro de fecha
      this.filters.ciudad = params['ciudad'] || '';  // Filtro de ciudad
      this.filters.tipo = params['tipo'] || '';  // Filtro de tipo de publicación

      // Llamamos al servicio con todos los parámetros
      this.publicacionService.buscarPublicaciones(this.query, this.filters).subscribe((data: any) => {
        this.publicaciones = data;
      });
    });
  }
}
