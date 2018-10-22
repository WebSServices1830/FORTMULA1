import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

import {MockService} from '../mocks/mock.service';
import { Entrenamiento } from '../models/entrenamiento';
import {Piloto} from '../models/piloto';

@Component({
  selector: 'app-entrenamientos',
  templateUrl: './entrenamientos.component.html',
  styleUrls: ['./entrenamientos.component.css']
})
export class EntrenamientosComponent implements OnInit {

  entrenamientos: Entrenamiento[];
  pilotos: Piloto[];

  constructor(
    private route: ActivatedRoute,
    private service: MockService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getEntrenamientos();
    if (this.entrenamientos) {
      this.getPilotosEntrenamiento();
    }
  }

  getEntrenamientos(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getEntrenamientos(id).subscribe(entrenamientos => this.entrenamientos = entrenamientos);
  }

  getPilotosEntrenamiento(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getPilotosEntrenamiento(id).subscribe(pilotos => this.pilotos = pilotos);
  }

  goBack(): void {
    this.location.back();
  }

}
