import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

import {MockService} from '../mocks/mock.service';
import { Pista } from '../models/pista';

@Component({
  selector: 'app-pista',
  templateUrl: './pista.component.html',
  styleUrls: ['./pista.component.css']
})
export class PistaComponent implements OnInit {

  pista: Pista;

  constructor(
    private route: ActivatedRoute,
    private service: MockService
  ) { }

  ngOnInit() {
    this.getPista();
  }

  getPista(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getPista(id).subscribe(pista => this.pista = pista);
  }

}
