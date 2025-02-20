import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Elimina RouterLink y RouterLinkActive
import { HeaderComponent } from './header/header.component';
import { MenuInferiorComponent } from './menu-inferior/menu-inferior.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MenuInferiorComponent], // Elimina RouterLink y RouterLinkActive de los imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-companion'
}