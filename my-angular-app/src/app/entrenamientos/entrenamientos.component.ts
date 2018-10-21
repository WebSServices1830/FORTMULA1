import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

import {MockService} from '../mocks/mock.service';
import { Entrenamiento } from '../models/entrenamiento';

@Component({
  selector: 'app-entrenamientos',
  templateUrl: './entrenamientos.component.html',
  styleUrls: ['./entrenamientos.component.css']
})
export class EntrenamientosComponent implements OnInit {

  entrenamientos: Entrenamiento[];

  constructor(
    private route: ActivatedRoute,
    private service: MockService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getEntrenamientos();
  }

  getEntrenamientos(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getEntrenamientos(id).subscribe(entrenamientos => this.entrenamientos = entrenamientos);
  }

  goBack(): void {
    this.location.back();
  }

}
