import { Component, OnInit } from '@angular/core';
import {Pista} from '../../models/pista';

@Component({
  selector: 'app-crear-pista',
  templateUrl: './crear-pista.component.html',
  styleUrls: ['./crear-pista.component.css']
})
export class CrearPistaComponent implements OnInit {

  pista: Pista;

  constructor() { }

  ngOnInit() {
    this.pista = new Pista();
  }

  createPista(){

  }

}
