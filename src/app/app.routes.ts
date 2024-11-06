import { Routes } from '@angular/router';
import { PublicacionesComponent } from '../app/features/publicaciones/publicaciones.component';
import { UsuarioComponent } from '../app/features/usuario/usuario.component';
import { LoginComponent } from '../app/features//auth/login/login.component';
import { RegisterComponent } from '../app/features/auth/register/register.component';
import { authGuard } from './guards/auth.guard';
import { DetallePublicacionComponent } from '../app/features/detallePublicacion/detalle-publicacion.component';
import { CrearPublicacionComponent } from './features/crear-publicacion/crear-publicacion.component';
import { ResultadosBusquedaComponent } from './features/resultados-busqueda/resultados-busqueda.component';
import { UserProfileComponent } from './features/user-profile/user-profile.component';

export const routes: Routes = [
    { path: '', redirectTo: '/publicaciones', pathMatch: 'full'},
    { path:'login', component: LoginComponent},
    { path:'register', component:RegisterComponent},
    { path:'publicaciones', component: PublicacionesComponent},
    { path:'mis-publicaciones', component: PublicacionesComponent },
    { path:'usuarioProfile', component: UsuarioComponent, canActivate: [authGuard]},
    { path: 'publicacion/:id', component: DetallePublicacionComponent },
    { path: 'crearPublicacion', component: CrearPublicacionComponent,canActivate: [authGuard] },
    { path: 'resultados', component: ResultadosBusquedaComponent },
    { path: 'userProfile', component: UserProfileComponent,canActivate: [authGuard] }
];
