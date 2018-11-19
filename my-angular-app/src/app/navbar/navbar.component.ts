import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  routes: object[];

  isHomePage(): boolean {
    return this.router.url.length === 1;
  }

  isRouteSelected(route: any): boolean {
    if (!this.isHomePage()) {
      return route.link.includes(this.router.url);
    } else {
      return route.link == this.router.url;
    }
  }

  constructor(private router: Router) {
    this.routes = [
      {
        link: "/",
        title: "Inicio",
      },
      {
        link: "/lista-escuderia",
        title: "Escuderías",
      },
      {
        link: "/lista-premio",
        title: "Premios",
      },
      {
        link: "/perfil/1",
        title: "Jose",
      }
    ].reverse();
  }

  ngOnInit() {
  }

}
