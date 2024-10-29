import { Routes } from '@angular/router';
import { PublicacionesComponent } from '../app/features/publicaciones/publicaciones.component';
import { UsuarioComponent } from '../app/features/usuario/usuario.component';
import { LoginComponent } from '../app/features//auth/login/login.component';
import { RegisterComponent } from '../app/features//auth/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/publicaciones', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'publicaciones', component: PublicacionesComponent },
  { path: 'usuarioProfile', component: UsuarioComponent },
];
