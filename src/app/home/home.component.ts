import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropuestaDiaComponent } from '../propuesta-dia/propuesta-dia.component';
import { NovedadesComponent } from '../novedades/novedades.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,  PropuestaDiaComponent, NovedadesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'app-companion'
}