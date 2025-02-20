import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedesSocialesComponent } from '../redes-sociales/redes-sociales.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, RedesSocialesComponent],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  email = 'monica.geller@example.com';
  instagramUrl = 'friends_ig';
}