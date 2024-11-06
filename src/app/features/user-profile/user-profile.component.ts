import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfileService } from '../../core/services/user-profile.service';
import { AuthService } from '../../core/services/auth.service';

interface UserProfile {
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  }

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  dataProfile:UserProfile = {
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
  };
  idUsuario: string | null = null;

  constructor(private route: ActivatedRoute, private profileService: UserProfileService, private authService: AuthService,  private router: Router) {
    
  }
  ngOnInit() {
     
    this.idUsuario = this.authService.getUserIdFromToken();

    if(this.idUsuario){
      this.profileService.getDataProfile(this.idUsuario).subscribe(
        (data) => {
          this.dataProfile = data
      },
      (error) => {
        console.error("Error al cargar los datos", error);
      }
    );
    }
   
  }
}
