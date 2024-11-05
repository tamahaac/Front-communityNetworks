import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { authService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(public authService: authService, private router: Router) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAutenthicated(); // Comprueba el estado de autenticación una vez
  }

  logout(): void {
    this.authService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  // En el componente de la barra de navegación
isAuthRoute(): boolean {
  const authRoutes = ['/login', '/register'];
  return authRoutes.includes(this.router.url);
}

}
