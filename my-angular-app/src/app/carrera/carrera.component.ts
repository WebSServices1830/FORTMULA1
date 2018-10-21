import { Component, OnInit } from '@angular/core';
import {Carrera} from '../models/carrera';
import {ActivatedRoute} from '@angular/router';
import {MockService} from '../mocks/mock.service';
import {Location} from '@angular/common';
import {Resultado} from '../models/resultado';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})
export class CarreraComponent implements OnInit {

  resultados: Resultado[];
  carrera: Carrera;

  constructor(
    private route: ActivatedRoute,
    private service: MockService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCarrera();
    if (this.carrera) {
      this.getResultados();
    }
  }

  getCarrera(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getCarrera(id).subscribe(carrera => this.carrera = carrera);
  }

  getResultados(): void {
    this.service.getResultadosCarrera(this.carrera.idPremio).subscribe(resultados => this.resultados = resultados);
  }

  goBack(): void {
    this.location.back();
  }

}
