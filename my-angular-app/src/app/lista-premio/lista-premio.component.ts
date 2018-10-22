import { Component, OnInit } from '@angular/core';
import { Premio } from '../models/premio';
import {MockService} from '../mocks/mock.service';
import {Pista} from '../models/pista';

@Component({
  selector: 'app-lista-premio',
  templateUrl: './lista-premio.component.html',
  styleUrls: ['./lista-premio.component.css']
})
export class ListaPremioComponent implements OnInit {

  premios: Premio[];
  pistas: Pista[];
  fotos: string[];
  alts: string[];

  constructor(private service: MockService) { }

  ngOnInit() {
    this.getPremios();
    if (this.premios) {
      this.fotos = [];
      this.alts = [];
      //this.getFotos();
      this.getFotos();
    }
  }

  getPremios(): void {
    this.service.getPremios().subscribe(premios => this.premios = premios);
  }

  /*getFotos(): void {
    this.service.getFotos().subscribe(fotos => this.fotos = fotos);
  }*/

  getFotos(): void {
    this.service.getPistas().subscribe(pistas => this.pistas = pistas);

    if (this.pistas) {
      for (let i = 0; i < this.premios.length; i++) {
        let aux = this.pistas.find(pista => pista.id === this.premios[i].id);
        this.fotos[this.premios[i].id] = aux.foto;
        this.alts[this.premios[i].id] = aux.alt;
      }
    }
  }

}
