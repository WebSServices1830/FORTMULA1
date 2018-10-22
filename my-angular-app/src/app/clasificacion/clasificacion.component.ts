import { Component, OnInit } from '@angular/core';
import {Clasificacion} from '../models/clasificacion';
import {Resultado} from '../models/resultado';
import {ActivatedRoute} from '@angular/router';
import {MockService} from '../mocks/mock.service';
import {Location} from '@angular/common';
import {Piloto} from '../models/piloto';

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styleUrls: ['./clasificacion.component.css']
})
export class ClasificacionComponent implements OnInit {

  clasificacion: Clasificacion;
  resultadosQ1: Resultado[];
  resultadosQ2: Resultado[];
  resultadosQ3: Resultado[];

  pilotosQ1: Piloto[];
  pilotosQ2: Piloto[];
  pilotosQ3: Piloto[];

  q1: boolean;
  q2: boolean;
  q3: boolean;

  constructor(
    private route: ActivatedRoute,
    private service: MockService,
    private location: Location
  ) { }

  ngOnInit() {
    this.q1 = true;
    this.q2 = false;
    this.q3 = false;
    this.getClasificacion();
    if (this.clasificacion) {
      this.getResultadosQ1();
      if (this.resultadosQ1) {
        this.getPilotosResultadosQ1();
      }
      this.getResultadosQ2();
      if (this.resultadosQ2) {
        this.getPilotosResultadosQ2();
      }
      this.getResultadosQ3();
      if (this.resultadosQ3) {
        this.getPilotosResultadosQ3();
      }
    }
  }

  getClasificacion(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getClasificacion(id).subscribe(clasificacion => this.clasificacion = clasificacion);
  }

  getResultadosQ1(): void {
    this.service.getResultadosQ1(this.clasificacion.idPremio).subscribe(resultadosQ1 => this.resultadosQ1 = resultadosQ1);
  }

  getPilotosResultadosQ1(): void {
    this.service.getPilotosResultadosQ1(this.clasificacion.idPremio).subscribe(pilotos => this.pilotosQ1 = pilotos);
  }

  getResultadosQ2(): void {
    this.service.getResultadosQ2(this.clasificacion.idPremio).subscribe(resultadosQ2 => this.resultadosQ2 = resultadosQ2);
  }

  getPilotosResultadosQ2(): void {
    this.service.getPilotosResultadosQ2(this.clasificacion.idPremio).subscribe(pilotos => this.pilotosQ2 = pilotos);
  }

  getResultadosQ3(): void {
    this.service.getResultadosQ3(this.clasificacion.idPremio).subscribe(resultadosQ3 => this.resultadosQ3 = resultadosQ3);
  }

  getPilotosResultadosQ3(): void {
    this.service.getPilotosResultadosQ3(this.clasificacion.idPremio).subscribe(pilotos => this.pilotosQ3 = pilotos);
  }

  openQ1(): void {
    this.q1 = true;
    this.q2 = false;
    this.q3 = false;
  }

  openQ2(): void {
    this.q2 = true;
    this.q1 = false;
    this.q3 = false;
  }

  openQ3(): void {
    this.q3 = true;
    this.q1 = false;
    this.q2 = false;
  }

  goBack(): void {
    this.location.back();
  }

}
