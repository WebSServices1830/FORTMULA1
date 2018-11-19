import { Component, OnInit } from '@angular/core';
import { AuthService } from '../mocks/auth.service';
import UsuarioData from '../entities/UsuarioData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginMessage: string;
  usuarioData: UsuarioData;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.usuarioData = new UsuarioData();
  }

  doLogin() {
    if (this.usuarioData.password.length === 0 || this.usuarioData.username.length === 0) {
      alert("Por favor, rellena todos los campos");
    } else {
      this.loginMessage = "Cargando...";
      this.authService.login(this.usuarioData.username, this.usuarioData.password)
        .then(
          user => {
            this.router.navigate(['/perfil/' + user.id]);
            //console.log(JSON.stringify(user));
            //this.loginMessage = token.token;
          })
        .catch(err => {
          this.loginMessage = err;
        });
    }
  }
}
