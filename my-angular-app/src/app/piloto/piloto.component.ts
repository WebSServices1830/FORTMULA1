import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

import {MockService} from '../mocks/mock.service';
import { Piloto } from '../models/piloto';

@Component({
  selector: 'app-piloto',
  templateUrl: './piloto.component.html',
  styleUrls: ['./piloto.component.css']
})
export class PilotoComponent implements OnInit {

  piloto: Piloto;
  nuevo: Piloto;
  editFlag: boolean;
  comment = '';

  constructor(
    private route: ActivatedRoute,
    private service: MockService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.editFlag = false;
    this.piloto = new Piloto();
    this.getPiloto();
  }

  getPiloto(): void {
    const id = +this.route.snapshot.paramMap.get('idP');
    const escuderia = +this.route.snapshot.paramMap.get('id');
    this.service.getPiloto(id).subscribe(piloto => this.piloto = piloto);
    // this.service.getPiloto(id, escuderia).subscribe(piloto => this.piloto = piloto);
  }

  makeComment() {
    this.service.makeComment(this.comment);
  }

  edit() {
    this.editFlag = true;
    this.nuevo = new Piloto();
    /*this.nuevo.id = this.premio.id;
    this.nuevo.nombre = this.premio.nombre;
    this.nuevo.nacionalidad = this.piloto.nacionalidad;
    this.nuevo.fecha_nacimiento = this.piloto.fecha_nacimiento;
    this.nuevo.foto = this.piloto.foto;
    this.nuevo.id = this.piloto.;*/

    this.nuevo = JSON.parse(JSON.stringify(this.piloto));
    console.log(this.nuevo);
  }

  deletePiloto() {
    this.service.deletePiloto(this.piloto).subscribe(
      response =>{
        const idE = +this.route.snapshot.paramMap.get('id');
        this.router.navigate(['/escuderia/' + idE]);
      });
  }

  cancel() {
    this.editFlag = false;
  }

  editInfo() {
    this.service.editPiloto(this.nuevo).subscribe(
      response =>{
        const idE = +this.route.snapshot.paramMap.get('id');
        this.router.navigate(['/escuderia/' + idE]);
      });
  }

  goBack(): void {
    this.location.back();
  }

}
