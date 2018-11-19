import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

import {MockService} from '../mocks/mock.service';
import { Escuderia } from '../models/escuderia';
import { Piloto } from '../models/piloto';

@Component({
  selector: 'app-apuesta',
  templateUrl: './apuesta.component.html',
  styleUrls: ['./apuesta.component.css']
})
export class ApuestaComponent implements OnInit {

  escuderias: Escuderia[];
  pilotos: Piloto[];

  constructor(
    private route: ActivatedRoute,
    private service: MockService,
    private location: Location
  ) { }

  ngOnInit() {
    this.escuderias = new Array();
    this.getEscuderias();
    this.pilotos = new Array();
    this.getPilotos();
  }

  getEscuderias(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getEscuderias().subscribe(escuderias => this.escuderias = escuderias);
  }

  getPilotos(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.geListatPilotos().subscribe(pilotos => this.pilotos = pilotos);
  }
}
