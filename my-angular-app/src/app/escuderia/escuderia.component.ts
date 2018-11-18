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

  constructor(
    private route: ActivatedRoute,
    private service: MockService,
    private location: Location
  ) { }

  ngOnInit() {
    this.escuderia = new Escuderia();
    this.getEscuderia();
    this.getPilotos(this.escuderia.id);
    this.getAutos(this.escuderia.id);
  }

  getEscuderia(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getEscuderia(id).subscribe(escuderia => this.escuderia = escuderia);
  }

  getPilotos(idEscuderia: number): void {
    this.service.getPilotos(idEscuderia).subscribe(pilotos => this.pilotos = pilotos);
  }

  getAutos(idEscuderia: number): void {
    this.service.getAutos(idEscuderia).subscribe(autos => this.autos = autos);
  }

  goBack(): void {
    this.location.back();
  }

}
