import { Component, OnInit } from '@angular/core';
import { Escuderia } from '../models/escuderia';
import {MockService} from '../mocks/mock.service';

@Component({
  selector: 'app-lista-escuderia',
  templateUrl: './lista-escuderia.component.html',
  styleUrls: ['./lista-escuderia.component.css']
})
export class ListaEscuderiaComponent implements OnInit {

  escuderias: Escuderia[];

  constructor(private service: MockService) { }

  ngOnInit() {
    this.getEscuderias();
  }

  getEscuderias(): void {
    this.service.getEscuderias().subscribe(escuderias => this.escuderias = escuderias);
  }

}
