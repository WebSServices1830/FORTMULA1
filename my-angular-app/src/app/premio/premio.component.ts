import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

import {MockService} from '../mocks/mock.service';
import { Premio } from '../models/premio';

@Component({
  selector: 'app-premio',
  templateUrl: './premio.component.html',
  styleUrls: ['./premio.component.css']
})
export class PremioComponent implements OnInit {

  premio: Premio;
  foto: string;
  alt: string;

  constructor(
    private route: ActivatedRoute,
    private service: MockService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPremio();
    if (this.premio) {
      this.getFoto()
    }
  }

  getPremio(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getPremio(id).subscribe(premio => this.premio = premio);
  }

  getFoto(): void {
    this.service.getPista(this.premio.id).subscribe(pista => {
      this.foto = pista.foto;
      this.alt = pista.alt;
    });
  }

  goBack(): void {
    this.location.back();
  }

}
