import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

import {MockService} from '../mocks/mock.service';
import { Auto } from '../models/auto';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {

  auto: Auto;
  messageEdit: number = 0;
  messageCrear: number = 0;
  autonuevo: Auto;
  editar: Auto;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MockService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getAuto();
    this.autonuevo = new Auto();
    this.editar = new Auto();
    
  }

  getAuto(): void {
    const id = +this.route.snapshot.paramMap.get('idA');
    const escuderia = +this.route.snapshot.paramMap.get('id');
    this.service.getAuto(id).subscribe(auto => this.auto = auto);
  }

  goBack(): void {
    this.location.back();
  }

  crearAutoNuevo(){
    
    console.log("Crear auto");
    this.autonuevo.escuderia = this.auto.escuderia;
    this.autonuevo.beam_wing = "Beam Wing";
    this.autonuevo.end_plate = "Endplate";  
    this.autonuevo.id = this.auto.escuderia+10;
    this.autonuevo.ponton = "p";
    this.autonuevo.marca = "m";
    this.autonuevo.created = " ";
    this.autonuevo.updated = " ";
    console.log(this.autonuevo);

    const escuderia = +this.route.snapshot.paramMap.get('id');
       
    this.service.createAuto(this.autonuevo).subscribe(
      response => {
        console.log('funciona');
        this.router.navigate(['/escuderia/' + escuderia]);
      }, error => {
        console.log('Error! ' + error);
      }
    );

  }

  editarAuto(){
    
    console.log("Editar auto");
    this.editar.id = this.auto.id;
    this.editar.beam_wing = this.auto.beam_wing;
    this.editar.end_plate = this.auto.end_plate;
    this.editar.escuderia = this.auto.escuderia;
    this.editar.ponton = "p";
    this.editar.marca = "m";
  
    //this.editar = JSON.parse(JSON.stringify(this.auto));
    console.log(this.editar);

    const idE = +this.route.snapshot.paramMap.get('id');
    this.service.editAuto(this.editar).subscribe(
      response =>{
        console.log('funciona edit auto');
        this.router.navigate(['/escuderia/' + idE]);
      }, error => {
        console.log('Error! ' + error);
    });
  
  }

  eliminarAuto(){
    console.log( "ID a borrar: " + this.auto.id);
    const idE = +this.route.snapshot.paramMap.get('id');
    this.service.deleteAuto(this.auto).subscribe(
      response =>{
        console.log('funciona delete auto');
        this.router.navigate(['/escuderia/' + idE]);
      }, error => {
        console.log('Error! ' + error);
    });
  }

  mostrarEditar(){
    this.editar.modelo = this.auto.modelo;
    this.editar.color = this.auto.color;
    this.editar.motor = this.auto.motor;
    this.editar.potencia = this.auto.potencia;
    this.editar.foto = this.auto.foto;    
    this.messageEdit = 1;
  }
  quitarEditar(){
    this.messageEdit = 0;
  }
  mostrarCrear(){
    this.messageCrear = 1;
  }
  quitarCrear(){
    this.messageCrear = 0;
  }

}
