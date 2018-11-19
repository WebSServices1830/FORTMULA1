import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../mocks/auth.service';
import Usuario from '../entities/Usuario';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  routes: object[];
  usuario: Usuario;

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

  setDefaultRoutes(user?: Usuario) {

    const loginRoute = {
      link: "/login",
      title: "Iniciar sesión",
    };

    if (user != null) {
      console.log(user);
      loginRoute.link = "/perfil/" + user.id;
      loginRoute.title = user.usuario.username;
    }

    this.routes = [
      loginRoute,
      {
        link: "/lista-premio",
        title: "Premios",
      },
      {
        link: "/lista-escuderia",
        title: "Escuderías",
      },
      {
        link: "/",
        title: "Inicio",
      },
    ];
  }

  getRoutes() {
    return this.routes;
  }

  constructor(private router: Router, private authService: AuthService) {
    this.setDefaultRoutes();
  }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      this.setDefaultRoutes(user);
    });
  }

}
