import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

import {MockService} from '../mocks/mock.service';
import { Premio } from '../models/premio';
import {Pista} from '../models/pista';

@Component({
  selector: 'app-premio',
  templateUrl: './premio.component.html',
  styleUrls: ['./premio.component.css']
})
export class PremioComponent implements OnInit {

  premio: Premio;
  nuevo: Premio;
  editFlag: boolean;
  messageCreate: 0;

  constructor(
    private route: ActivatedRoute,
    private service: MockService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.editFlag = false;
    this.premio = new Premio();
    this.premio.info_pista = new Pista();
    this.getPremio();
  }

  getPremio(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getPremio(id).subscribe(premio => this.premio = premio);
  }

  mostrarEditar() {
    this.editFlag = true;
    this.nuevo = new Premio();
    this.nuevo = JSON.parse(JSON.stringify(this.premio));
    console.log(this.nuevo);
  }

  editarInfo() {
    this.service.editPremio(this.nuevo).subscribe(
      response => {
        const id = +this.route.snapshot.paramMap.get('id');
        this.router.navigate(['/premio/' + id]);
      });
  }

  /*deletePiloto() {
    this.service.deletePiloto(this.piloto).subscribe(
      response =>{
        const idE = +this.route.snapshot.paramMap.get('id');
        this.router.navigate(['/escuderia/' + idE]);
      });
  }*/

  cancel() {
    this.editFlag = false;
  }
  goBack(): void {
    this.location.back();
  }

}
