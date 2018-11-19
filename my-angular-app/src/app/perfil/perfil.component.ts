import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  uname: String = "Usuario";
  uemail: String = "user@javeriana.edu.co";
  uedad: number = 22;
  udescrip: String = "Hola, soy estudiante de la Javeriana y me encanta ver las carreras de la Fórmula 1.";
  ufoto: String = "https://image.flaticon.com/icons/svg/1193/1193283.svg";
  urole: String = "Aficionado";

  message: number = 0;
  constructor() { }

  ngOnInit() {
  }

  mostrarEditar() {
    this.message = 1;
  }

  quitarEditar() {
    this.message = 0;
  }

}
