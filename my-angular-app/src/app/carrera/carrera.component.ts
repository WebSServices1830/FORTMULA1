import { Component, OnInit } from '@angular/core';
import {Carrera} from '../models/carrera';
import {ActivatedRoute} from '@angular/router';
import {MockService} from '../mocks/mock.service';
import {Location} from '@angular/common';
import {Resultado} from '../models/resultado';
import {Piloto} from '../models/piloto';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})
export class CarreraComponent implements OnInit {

  carrera: Carrera;
  resultados: Resultado[];
  pilotos: Piloto[];

  constructor(
    private route: ActivatedRoute,
    private service: MockService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCarrera();
    if (this.carrera) {
      this.getResultados();
      if (this.resultados) {
        this.getPilotosCarrera();
      }
    }
  }

  getCarrera(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getCarrera(id).subscribe(carrera => this.carrera = carrera);
  }

  getResultados(): void {
    this.service.getResultadosCarrera(this.carrera.idPremio).subscribe(resultados => this.resultados = resultados);
  }

  getPilotosCarrera(): void {
    this.service.getPilotosCarrera(this.carrera.idPremio).subscribe(pilotos => this.pilotos = pilotos);
  }

  goBack(): void {
    this.location.back();
  }

}
