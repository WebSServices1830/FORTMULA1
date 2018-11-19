import { Component, OnInit } from '@angular/core';
import { AuthService } from '../mocks/auth.service';
import UsuarioData from '../entities/UsuarioData';
import { Router } from '@angular/router';
import Aficionado from '../entities/Aficionado';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginMessage: string;
  registerMessage: string;
  usuarioData: UsuarioData;
  aficionadoData: Aficionado;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.usuarioData = new UsuarioData();
    this.aficionadoData = new Aficionado();
  }

  doRegister() {
    if (this.aficionadoData.nombre.length === 0 || this.aficionadoData.fechaNacimiento.length === 0 || this.aficionadoData.descripcion.length === 0 || this.aficionadoData.foto.length === 0 || this.usuarioData.password.length === 0 || this.usuarioData.username.length === 0) {
      alert("Por favor, rellena todos los campos");
    } else {
      this.registerMessage = "Cargando...";
      this.aficionadoData.usuario = this.usuarioData;

      this.authService.register(this.aficionadoData)
        .then(data => {
          this.doLogin();
        });
    }
  }

  doLogin() {
    if (this.usuarioData.password.length === 0 || this.usuarioData.username.length === 0) {
      alert("Por favor, rellena todos los campos");
    } else {
      this.loginMessage = "Cargando...";
      this.authService.login(this.usuarioData.username, this.usuarioData.password)
        .then(
          user => {
            this.router.navigate(['/lista-escuderia']);
          })
        .catch(err => {
          this.loginMessage = err;
        });
    }
  }
}
