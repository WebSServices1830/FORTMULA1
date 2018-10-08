import { Component, OnInit } from '@angular/core';
import { Premio } from '../models/premio';
import {MockService} from '../mocks/mock.service';

@Component({
  selector: 'app-lista-premio',
  templateUrl: './lista-premio.component.html',
  styleUrls: ['./lista-premio.component.css']
})
export class ListaPremioComponent implements OnInit {

  premios: Premio[];

  constructor(private service: MockService) { }

  ngOnInit() {
    this.getPremios();
  }

  getPremios(): void {
    this.service.getPremios().subscribe(premios => this.premios = premios);
  }

}
