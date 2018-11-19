import { Component, OnInit } from '@angular/core';
import { AuthService } from '../mocks/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import Aficionado from '../entities/Aficionado';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  aficionado: Aficionado;
  isMe: boolean = false;
  id: number;
  uname: String;
  uemail: String;
  uedad: string;
  udescrip: String;
  ufoto: String = "https://image.flaticon.com/icons/svg/1193/1193283.svg";
  urole: String = "Aficionado";

  message: number = 0;
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.retrieveIsMe();
      this.authService.getAficionadoById(this.id).subscribe(data => {
        this.uname = data.nombre;
        this.udescrip = data.descripcion;
        this.uedad = data.fechaNacimiento;
        this.ufoto = data.foto;
        this.uemail = data.usuario.username;
        console.log("usr: " + JSON.stringify(data));
      });
      // In a real app: dispatch action to load the details here.
    });
  }

  retrieveIsMe() {
    this.authService.getCurrentUser().subscribe(user => {
      this.isMe = this.id === user.id;
    });
  }

  mostrarEditar() {
    this.message = 1;
  }

  quitarEditar() {
    this.message = 0;
  }

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }

}
