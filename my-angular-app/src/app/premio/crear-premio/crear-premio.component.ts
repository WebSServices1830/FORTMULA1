import { Component, OnInit } from '@angular/core';
import {Premio} from '../../models/premio';
import {ActivatedRoute, Router} from '@angular/router';
import {MockService} from '../../mocks/mock.service';
import {Pista} from '../../models/pista';

@Component({
  selector: 'app-crear-premio',
  templateUrl: './crear-premio.component.html',
  styleUrls: ['./crear-premio.component.css']
})
export class CrearPremioComponent implements OnInit {

  premio: Premio;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mockService: MockService
  ) { }

  ngOnInit() {
    this.premio = new Premio();
    this.premio.info_pista = new Pista();
  }

  createPremio() {
    this.premio.campeonato = 1;
    this.premio.info_pista.id = 100;
    console.log(JSON.stringify(this.premio));
    this.mockService.createPremio(this.premio, this.premio.info_pista).subscribe(
      response => {
        console.log('siiii');
        this.router.navigate(['/lista-premio']);
      }, error => {
        console.log('omg!!! ' + error);
      }
    );
  }

}
