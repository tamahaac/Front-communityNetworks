import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-tarjeta-publicacion',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tarjeta-publicacion.component.html',
  styleUrl: './tarjeta-publicacion.component.css'
})
export class TarjetaPublicacionComponent {
  @Input() publicacion: any; 
  
  
}
