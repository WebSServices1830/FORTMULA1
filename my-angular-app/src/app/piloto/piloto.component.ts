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
  editFlag: boolean;
  comment = '';

  constructor(
    private route: ActivatedRoute,
    private service: MockService,
    private location: Location
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
    //this.service.getPiloto(id, escuderia).subscribe(piloto => this.piloto = piloto);
  }

  makeComment() {
    this.service.makeComment(this.comment);
  }

  edit() {
    this.editFlag = true;
  }

  editInfo() {
    this.editFlag = false;
  }

  goBack(): void {
    this.location.back();
  }

}
