import { Component, OnInit } from '@angular/core';
import {Clasificacion} from '../models/clasificacion';
import {Resultado} from '../models/resultado';
import {ActivatedRoute} from '@angular/router';
import {MockService} from '../mocks/mock.service';
import {Location} from '@angular/common';

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

  constructor(
    private route: ActivatedRoute,
    private service: MockService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getClasificacion();
    if (this.clasificacion) {
      this.getResultadosQ1();
      this.getResultadosQ2();
      this.getResultadosQ3();
    }
  }

  getClasificacion(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getClasificacion(id).subscribe(clasificacion => this.clasificacion = clasificacion);
  }

  getResultadosQ1(): void {
    this.service.getResultadosQ1(this.clasificacion.idPremio).subscribe(resultadosQ1 => this.resultadosQ1 = resultadosQ1);
  }

  getResultadosQ2(): void {
    this.service.getResultadosQ2(this.clasificacion.idPremio).subscribe(resultadosQ2 => this.resultadosQ2 = resultadosQ2);
  }

  getResultadosQ3(): void {
    this.service.getResultadosQ3(this.clasificacion.idPremio).subscribe(resultadosQ3 => this.resultadosQ3 = resultadosQ3);
  }

  goBack(): void {
    this.location.back();
  }

}
