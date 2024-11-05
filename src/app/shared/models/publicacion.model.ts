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
  