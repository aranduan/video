import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovedadesService } from './novedades.service';

@Component({
  selector: 'app-novedades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './novedades.component.html',
  styleUrl: './novedades.component.css',
  providers: [NovedadesService]
})
export class NovedadesComponent implements OnInit {

  novedades: any[] = [];

  constructor(private novedadesService: NovedadesService) { }

  ngOnInit(): void {
    this.novedades = this.novedadesService.obtenerNovedades(); // Obtiene las novedades del servicio directamente
  }
}