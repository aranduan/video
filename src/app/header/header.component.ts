import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    windowWidth: number = 0;
    isMenuOpen: boolean = false;
    isSubMenuOpen: string | null = null;
    menuItemsCount: number = 4; // Data Binding para número de items

    ngOnInit(): void {
        if (typeof window !== 'undefined') {
          this.windowWidth = window.innerWidth;
        }
    }
    // Escuchar cambios en el tamaño de la ventana
    @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
      if (typeof window !== 'undefined') {
        this.windowWidth = (event.target as Window).innerWidth;
       }
    }

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
        this.isSubMenuOpen = null;
    }

    toggleSubMenu(menu: string) {
        this.isSubMenuOpen = this.isSubMenuOpen === menu ? null : menu;
    }
}