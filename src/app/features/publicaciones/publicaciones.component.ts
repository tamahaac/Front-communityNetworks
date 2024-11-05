import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Publicacion } from '../../shared/models/publicacion.model';
import { PublicacionService } from '../../core/services/publicacion.service';
import { CommonModule } from '@angular/common';
import { authService } from '../../core/services/auth.service';
@Component({
  selector: 'app-publicaciones',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css'
})

export class PublicacionesComponent implements OnInit {
  isLoading = true; // Estado de carga inicial
    publicaciones: Publicacion[] = [];

    constructor(private publicacionService: PublicacionService, public authService: authService) { }

    ngOnInit() {

      this.publicacionService.getAllPublicaciones().subscribe(
        (data) => {
         setTimeout(() => {
            this.publicaciones = data;
            this.isLoading = false; 
          }, 3000)
      },
      (error) => {
        console.error("Error al cargar los datos", error);
        this.isLoading = false; 
      }
    );
    }

}
