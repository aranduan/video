import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-propuesta-dia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './propuesta-dia.component.html',
  styleUrls: ['./propuesta-dia.component.css']
})
export class PropuestaDiaComponent {
  // Lista de propuestas
  propuestas = [
    {
      title: 'Festín de salchichas',
      subtitle: 'En honor del tío feo desnudo',
      description: 'Preparad bastantes salchichas para un batallón y ofreced tres guarniciones distintas para daros un festín.',
      image: 'https://i.imgur.com/BlpE4Ay.png'
    },
    {
      title: 'Pizza de Joey',
      subtitle: '¡La favorita de Joey Tribbiani!',
      description: 'Una pizza bien cargada de queso y pepperoni, lista para disfrutar con amigos.',
      image: 'https://i.imgur.com/YPKKeJK.png'
    },
    {
      title: 'Muffins de Chandler',
      subtitle: 'Tan buenos como sus bromas',
      description: 'Muffins esponjosos para un desayuno lleno de humor.',
      image: 'https://i.imgur.com/hEjLyse.png'
    }
  ];

  // Propuesta seleccionada inicialmente
  selectedPropuesta = this.propuestas[0];

  // Método para cambiar la propuesta
  changePropuesta(): void {
    const randomIndex = Math.floor(Math.random() * this.propuestas.length);
    this.selectedPropuesta = this.propuestas[randomIndex];
  }
}
