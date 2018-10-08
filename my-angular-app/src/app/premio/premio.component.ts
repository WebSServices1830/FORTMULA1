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

  constructor(
    private route: ActivatedRoute,
    private service: MockService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPremio();
  }

  getPremio(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getPremio(id).subscribe(premio => this.premio = premio);
  }

  goBack(): void {
    this.location.back();
  }

}
