import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../core/services/usuarios/user.service';
import { Router, RouterLink } from '@angular/router';

interface RegisterForm {
  cedula: string;
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  contrasena: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
})

export class  RegisterComponent {
  registerForm: RegisterForm = {
    cedula: '',
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    contrasena: ''
  };

  constructor(private userService: UserService, private router: Router){
  }

  onSubmit() {
    console.log("registro"+ this.registerForm.cedula);
    this.userService.register(this.registerForm).subscribe({
      next: ()=> this.router.navigate(['/login']),
      error: (err: any) => console.error('Registration Failed', err)
    })
  
  /*  if (this.registerForm.valid) {
      console.log('Form Submitted', this.registerForm.value);
    } else {
      console.log('Form is invalid');
    }*/
   
  }
}