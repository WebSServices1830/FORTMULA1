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
  comment = '';

  constructor(
    private route: ActivatedRoute,
    private service: MockService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPiloto();
  }

  getPiloto(): void {
    const id = +this.route.snapshot.paramMap.get('idP');
    const idEscuderia = +this.route.snapshot.paramMap.get('id');
    this.service.getPiloto(id, idEscuderia).subscribe(piloto => this.piloto = piloto);
  }

  makeComment() {
    this.service.makeComment(this.comment);
  }

  goBack(): void {
    this.location.back();
  }

}
