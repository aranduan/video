import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common'; // Importamos CommonModule

@Component({
    selector: 'app-menu-inferior',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './menu-inferior.component.html',
    styleUrl: './menu-inferior.component.css'
})
export class MenuInferiorComponent implements OnInit{
    currentRoute: string = '/';

    constructor(private router:Router){}

    ngOnInit(): void {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe((event)=>{
              this.currentRoute = (event as NavigationEnd).url;
          })
    }
}