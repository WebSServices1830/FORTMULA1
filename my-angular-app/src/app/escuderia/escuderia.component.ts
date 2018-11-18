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

  constructor(
    private route: ActivatedRoute,
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
    this.service.getAutosEscuderia(id).subscribe(auto => this.auto = auto);
  }

  goBack(): void {
    this.location.back();
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
