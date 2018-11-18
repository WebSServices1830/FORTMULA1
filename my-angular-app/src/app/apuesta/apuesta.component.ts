import {MockService} from '../mocks/mock.service';
import { Escuderia } from '../models/escuderia';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apuesta',
  templateUrl: './apuesta.component.html',
  styleUrls: ['./apuesta.component.css']
})
export class ApuestaComponent implements OnInit {

  escuderias: Escuderia[];

  constructor(
    private route: ActivatedRoute,
    private service: MockService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getEscuderias();
    //console.log("hola" + this.escuderias.toString);
  }

  getEscuderias(): void{
    this.escuderias = [];
  }
}
