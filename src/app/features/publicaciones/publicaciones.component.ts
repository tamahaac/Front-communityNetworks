import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Publicacion, UsuarioPublicacion } from '../../shared/models/publicacion.model';
import { PublicacionService } from '../../core/services/publicacion.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
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
  publicacionesByUser: UsuarioPublicacion = {
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    publicaciones: []
  };
  tienePublicaciones: string = "";

    constructor(private publicacionService: PublicacionService, public authService: AuthService, private route: ActivatedRoute) { }

    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        const userId = params['userId'];
        if (userId) {
          this.getPostByuser(userId);
        } else {
          this.getAllPost();
        }
      })
     
    }

  getAllPost = () => {
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

  getPostByuser = (userId: number) => {
    this.publicacionService.getPublicacionByIdUser(userId).subscribe
    (
      (data) => {
        setTimeout(() => {
          if(data){
             this.publicacionesByUser = data;
          }else {
            this.tienePublicaciones = "No tienes publicaciones"
          }
            
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
