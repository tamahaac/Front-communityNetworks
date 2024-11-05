import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../../shared/models/publicacion.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PublicacionService } from '../../core/services/publicacion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-publicacion',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './detalle-publicacion.component.html',
  styleUrl: './detalle-publicacion.component.css'
})
export class DetallePublicacionComponent implements OnInit{
  
  publicacion: Publicacion | null = null;
  isLoading = true; // Estado de carga inicial
  
  constructor(
    private route: ActivatedRoute,
    private publicacionService: PublicacionService
  ) {}

  ngOnInit(): void {
    const publicacionId = Number(this.route.snapshot.paramMap.get('id'));
    
    // Inicia la carga de datos
    this.publicacionService.getPublicacionById(publicacionId).subscribe(
      (data) => {
        setTimeout(() => {
          this.publicacion = data;
          this.isLoading = false; // Oculta el spinner después del retraso
        }, 3000); // Retraso de 1.5 segundos
      },
      (error) => {
        console.error("Error al cargar los datos", error);
        this.isLoading = false; // Oculta el spinner también en caso de error
      }
    );
  }

}
