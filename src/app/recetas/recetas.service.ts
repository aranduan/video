import { Injectable } from '@angular/core';

interface Receta {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  cocinada: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  private recetas: Receta[] = [
    { id: 1, nombre: 'Saladas', descripcion: 'Deliciosas recetas saladas para todos los gustos.', imagen: 'https://i.imgur.com/BlpE4Ay.png', cocinada: false },
    { id: 2, nombre: 'Dulces', descripcion: 'Irresistibles recetas dulces para endulzar tu día.', imagen: 'https://i.imgur.com/hEjLyse.png', cocinada: false },
    { id: 3, nombre: 'Laboratorio', descripcion: 'Experimenta con ingredientes y técnicas innovadoras.', imagen: 'https://i.imgur.com/YPKKeJK.png', cocinada: false },
    { id: 4, nombre: 'Vegetarianas', descripcion: 'Sabrosas recetas vegetarianas llenas de sabor y nutrientes.', imagen: 'https://i.imgur.com/8ITLP8W.png', cocinada: false }
  ];

  obtenerRecetas(): Receta[] {
    return this.recetas;
  }

  obtenerRecetaPorId(id: number): Receta | undefined {
    return this.recetas.find(receta => receta.id === id);
  }

  filtrarRecetasPorNombre(nombre: string): Receta[] {
    return this.recetas.filter(receta => receta.nombre.toLowerCase().includes(nombre.toLowerCase()));
  }

  marcarComoCocinada(id: number): void {
    const receta = this.recetas.find(receta => receta.id === id);
    if (receta) {
      receta.cocinada = !receta.cocinada; // Cambia el estado de "cocinada"
    }
  }
}