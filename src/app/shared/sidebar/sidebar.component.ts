import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PublicacionesComponent } from "../../features/publicaciones/publicaciones.component";
import { TarjetaPublicacionComponent } from "../../features/components/tarjeta-publicacion/tarjeta-publicacion.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, PublicacionesComponent, TarjetaPublicacionComponent, CommonModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  filters = {
    fecha: null,
    ciudad: '',
    tipo: ''
  };

  constructor(private router: Router){}

 
  onFilter(event: Event): void {
    event.preventDefault();

    const queryParams: any = {};

    if (this.filters.fecha) {
      queryParams.fecha = this.filters.fecha;
    }
    if (this.filters.ciudad) {
      queryParams.ciudad = this.filters.ciudad;
    }
    if (this.filters.tipo) {
      queryParams.tipo = this.filters.tipo;
    }

    if (Object.keys(queryParams).length > 0) {
      this.router.navigate(['/resultados'], { queryParams });
    }
  }
}