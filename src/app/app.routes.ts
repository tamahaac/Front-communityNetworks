import { Routes } from '@angular/router';
import { CiudadComponent } from './ciudad/ciudad.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { UsuarioComponent } from './usuario/usuario.component';

export const routes: Routes = [
    { path:'', component: CiudadComponent},
    { path:'', component: ComentariosComponent},
    { path:'', component: DepartamentoComponent},
    { path:'', component: PublicacionesComponent},
    { path:'', component: UsuarioComponent}
];

