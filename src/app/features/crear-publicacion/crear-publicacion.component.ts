import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PublicacionService } from '../../core/services/publicacion.service';
import { CrearPublicacionService } from '../../core/services/crearPublicacion.service';
import { authService } from '../../core/services/auth.service';

interface PublicacionFormControls {
  titulo: any;
  descripcion: any;
  direccion: any;
  fechaInicio: any;
  fechaFin: any;
  idDepartamento: any;
  idCiudad: any;
  idTipoPublicacion: any;
  images: any;
}

interface CiudadForm {
  idDepartamento: number;
  nombreDepartamento: string;
  ciudades: {
    idCiudad: number;
    nombre: string;
  }[];
}


@Component({
  selector: 'app-create-publicacion',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './crear-publicacion.component.html',
  styleUrl: './crear-publicacion.component.css'
})
export class CrearPublicacionComponent implements OnInit {
  publicacionForm : FormGroup<PublicacionFormControls>;
  submitted = false;
  departamentos: any[] = [];
  ciudades: { idCiudad: number; nombre: string }[] = [];
  idUsuarioPublicador: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private publicacionService: PublicacionService,
    private crearPublicacionService: CrearPublicacionService,
    private authService: authService
    
  ) {
    this.publicacionForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.minLength(20)]],
      direccion: ['', Validators.required], // Campo para seleccionar el departamento
      images: [null, Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      idDepartamento: ['', Validators.required], // Campo para seleccionar el departamento
      idCiudad: ['', Validators.required], // Campo para seleccionar la ciudad
      idTipoPublicacion: ['', Validators.required]
    });

  }

  ngOnInit(): void {
    // Cargar los departamentos al iniciar el componente
    this.crearPublicacionService.getDepartamentos().subscribe(departamentos => this.departamentos = departamentos);

    // Obtener el ID del usuario del token JWT
    this.idUsuarioPublicador = this.authService.getUserIdFromToken();
    console.log(this.idUsuarioPublicador);
    
  }
  onDepartamentoChange() {
    const idDepartamento = this.publicacionForm.get('idDepartamento')?.value as number;
    if (idDepartamento) {
      this.crearPublicacionService.getCiudadesByDepartamento(idDepartamento).subscribe((data: CiudadForm) => {
        this.ciudades = data.ciudades;
      });
      this.publicacionForm.get('idCiudad')?.reset();
    }
  }

  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Guarda el archivo en el control del formulario
      this.publicacionForm.patchValue({ images: file });
      this.publicacionForm.get('images')?.updateValueAndValidity();
    }
  }
  
  onSubmit() {
    console.log("onSubmit llamado");
    this.submitted = true;
    console.log(this.publicacionForm.valid);
    if (this.publicacionForm.invalid) {
      console.log("Formulario inválido:", this.publicacionForm.errors);
      Object.keys(this.publicacionForm.controls).forEach(key => {
        const controlErrors = this.publicacionForm.get(key)?.errors;
        if (controlErrors) {
          console.log(`Errores en el campo ${key}:`, controlErrors);
        }
      });
      return;
    }
    
  
    const formData = new FormData();
    formData.append('titulo', this.publicacionForm.value.titulo);
    formData.append('descripcion', this.publicacionForm.value.descripcion);
    formData.append('direccion', this.publicacionForm.value.direccion);
    formData.append('fechaInicio', this.publicacionForm.value.fechaInicio);
    formData.append('fechaFin', this.publicacionForm.value.fechaFin);
    formData.append('idCiudad', this.publicacionForm.value.idCiudad);
    formData.append('idTipoPublicacion', this.publicacionForm.value.idTipoPublicacion);
    formData.append('idUsuarioPublicador', this.idUsuarioPublicador ?? '');
  
    // Adjuntar archivo de imagen
    const file = this.publicacionForm.get('images')?.value;
    if (file instanceof File) {
      formData.append('images', file, file.name);
    }
  
    this.publicacionService.createPublicacion(formData).subscribe(
      response => console.log('Publicación creada:', response),
      error => console.error('Error al crear la publicación:', error)
    );
  }
  
  

  get f() {
    return this.publicacionForm.controls;
  }

}
