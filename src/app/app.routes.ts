import { Routes } from '@angular/router';
import { NovedadesComponent } from './novedades/novedades.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeComponent } from './home/home.component';
import { RecetasComponent } from './recetas/recetas.component'; // Importa RecetasComponent

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'novedades', component: NovedadesComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'recetas', component: RecetasComponent } // Agrega la ruta para RecetasComponent
];