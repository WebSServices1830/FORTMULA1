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
  autonuevo: Auto = new Auto();

  constructor(
    private route: ActivatedRoute,
    private service: MockService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getAuto();
  }

  getAuto(): void {
    const id = +this.route.snapshot.paramMap.get('idA');
    const escuderia = +this.route.snapshot.paramMap.get('id');
    this.service.getAuto(id).subscribe(auto => this.auto = auto);
  }

  goBack(): void {
    this.location.back();
  }

  crearAutoNuevo(): void {
    console.log("Crear piloto");
    this.autonuevo.escuderia = this.auto.escuderia;
    this.autonuevo.beam_wing = "Beam Wing";
    this.autonuevo.end_plate = "Endplate";
    
    console.log(this.autonuevo);
    //this.service.crearAuto()

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
