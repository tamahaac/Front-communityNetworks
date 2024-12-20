import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router){

  }
  login(): void {
    console.log("usuario", this.user, this.password)
    this.authService.login(this.user, this.password).subscribe({
      next: ()=> this.router.navigate(['/publicaciones']),
      error: (err: any) => console.error('Login Failed', err)
    })
  }
}
