import { Component, OnInit } from '@angular/core';
import {Piloto} from '../../models/piloto';
import {MockService} from '../../mocks/mock.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crear-piloto',
  templateUrl: './crear-piloto.component.html',
  styleUrls: ['./crear-piloto.component.css']
})
export class CrearPilotoComponent implements OnInit {

  piloto: Piloto;

  constructor(
    private router: Router,
    private mockService: MockService
  ) { }

  ngOnInit() {
    this.piloto = new Piloto();
  }

  createPilot() {
    /*this.mockService.createPilot(this.piloto).subscribe(
      response => {
        //this.router.navigate(['']);
      }, error => {

      }
    );*/
  }

}
