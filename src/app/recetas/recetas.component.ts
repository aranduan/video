import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetasService } from './recetas.service';

@Component({
  selector: 'app-recetas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css'],
  providers: [RecetasService]
})
export class RecetasComponent implements OnInit {

  recetas: any[] = []; // Define el array recetas

  constructor(private recetasService: RecetasService) { } // Inyecta el servicio

  ngOnInit(): void {
    this.recetas = this.recetasService.obtenerRecetas(); // Obtiene las recetas del servicio
  }

  mostrarDescripcion(id: number): void {
    const receta = this.recetasService.obtenerRecetaPorId(id);
    if (receta) {
      alert(receta.descripcion);
    }
  }

  marcarComoCocinada(id: number): void { // Agrega el método "marcarComoCocinada"
    this.recetasService.marcarComoCocinada(id);
  }
}