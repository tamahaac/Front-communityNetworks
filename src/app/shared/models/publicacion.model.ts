export interface Publicacion {
    idPublicacion: number;
    titulo: string;
    descripcion: string;
    direccion: string;
    fechaInicio: Date;
    fechaFin: Date;
    fechaPublicacion: Date;
    ciudad: {
      idCiudad: number;
      nombre: string;
    };
    tipoPublicacion: {
      idTipoPublicacion: number;
      nombreTipo: string;
    };
    usuarioPublicador: {
      idUsuario: string;
      nombre: string;
      apellido: string;
      correo: string;
      telefono: string;
    };
    images: string;
  }

export interface UsuarioPublicacion {
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  publicaciones: DetailPublicacion[];
}

export interface DetailPublicacion {
  idPublicacion: number;
  tipoPublicacion: TipoPublicacion;
  ciudad: Ciudad;
  direccion: string;
  titulo: string;
  descripcion: string;
  fechaPublicacion: Date;
  fechaInicio: Date;
  fechaFin: Date;
  images: string;
  comentario: Comentario[];
}

export interface TipoPublicacion {
    idTipoPublicacion: number;
    nombreTipo: string;
}
export interface Ciudad {
  idCiudad: number;
  nombre: string;
}

export interface Comentario {
  // Aquí puedes agregar los campos de los comentarios si están definidos
}

  