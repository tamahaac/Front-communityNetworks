import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { PublicacionesComponent } from '../../features/publicaciones/publicaciones.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;
  idUsuario: string | null = null;
  searchQuery: string|null = null;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAutenthicated(); // Comprueba el estado de autenticación una vez
  }

  logout(): void {
    this.authService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isAuthRoute(): boolean {
    const authRoutes = ['/login', '/register'];
    return authRoutes.includes(this.router.url);
  }

  showMyPost= (): void => {
    this.idUsuario = this.authService.getUserIdFromToken();
    this.router.navigate(['/mis-publicaciones'], { queryParams: { userId: this.idUsuario } });
  }

  onSearch(event: Event): void {
    event.preventDefault();
    if (this.searchQuery) {
      this.router.navigate(['/resultados'], { queryParams: { query: this.searchQuery } });
    }
  }
  
}
