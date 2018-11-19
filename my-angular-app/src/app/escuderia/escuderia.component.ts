import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

import {MockService} from '../mocks/mock.service';
import { Escuderia } from '../models/escuderia';
import { Piloto } from '../models/piloto';
import { Auto } from '../models/auto';

@Component({
  selector: 'app-escuderia',
  templateUrl: './escuderia.component.html',
  styleUrls: ['./escuderia.component.css']
})
export class EscuderiaComponent implements OnInit {

  escuderia: Escuderia;
  pilotos: Piloto[];
  autos: Auto[];
  comment = '';
  messageEdit: number = 0;
  messageCrear: number = 0;
  editar: Escuderia;
  nuevo: Escuderia;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MockService,
    private location: Location
  ) { }

  ngOnInit() {
    this.escuderia = new Escuderia();
    this.getEscuderia();
    this.pilotos = new Array();
    this.autos = new Array();
    this.getPilotos();
    this.getAutos();
    this.editar = new Escuderia();
    this.nuevo = new Escuderia();
  }

  getEscuderia(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getEscuderia(id).subscribe(escuderia => this.escuderia = escuderia);
  }

  getPilotos(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getPilotos(id).subscribe(pilotos => this.pilotos = pilotos);
  }

  getAutos(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getAutosEscuderia(id).subscribe(autos => this.autos = autos);
  }

  goBack(): void {
    this.location.back();
  }

  editarEscuderia(){
    console.log("Editar escuderia");
    this.editar.id = this.escuderia.id;
    this.editar.pais = "p";
    this.editar.created = this.escuderia.created;
    this.editar.updated = "u";
  
    //this.editar = JSON.parse(JSON.stringify(this.auto));
    console.log(this.editar);

    this.service.editEscuderia(this.editar).subscribe(
      response =>{
        console.log('funciona edit escuderia');
        this.router.navigate(['lista-escuderia']);
      }, error => {
        console.log('Error! ' + error);
    });
  

  }

  crearEscuderia(){
    console.log("crear escuderia");
    this.nuevo.id = this.escuderia.id+10;
    this.nuevo.pais = "p";
    this.nuevo.created = "c";
    this.nuevo.updated = "u";
  
    //this.editar = JSON.parse(JSON.stringify(this.auto));
    console.log(this.nuevo);

    
    this.service.createEscuderia(this.nuevo).subscribe(
      response => {
        console.log('funciona create escuderia');
        this.router.navigate(['/lista-escuderia/']);
      }, error => {
        console.log('Error! ' + error);
      }
    );
    

  }

  eliminarEscuderia(){
    console.log( "ID a borrar: " + this.escuderia.id);
    const idE = +this.route.snapshot.paramMap.get('id');
    this.service.deleteEscuderia(this.escuderia).subscribe(
      response =>{
        console.log('funciona delete escuderia');
        this.router.navigate(['/lista-escuderia/']);
      }, error => {
        console.log('Error! ' + error);
    });

  }

  mostrarEditar(){
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
