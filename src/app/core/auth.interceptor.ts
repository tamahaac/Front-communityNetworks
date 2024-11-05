import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

    const authServiceInstance = inject(AuthService); // Inyectamos el servicio de autenticación
    const token = authServiceInstance.getToken();
    
    // Excluir el endpoint de login para que no se agregue el token
    const isLoginRequest = req.url.includes('/auth/login');
    if (isLoginRequest) {
        return next(req);
    }

    if (token) {
      // Clonamos la solicitud para añadir el encabezado de autorización
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next(clonedRequest);
    }
  
    // Si no hay token, continuamos con la solicitud original
    return next(req);

  };
