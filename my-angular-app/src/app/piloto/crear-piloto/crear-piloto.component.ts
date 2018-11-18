import { Component, OnInit } from '@angular/core';
import {Piloto} from '../../models/piloto';
import {MockService} from '../../mocks/mock.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-crear-piloto',
  templateUrl: './crear-piloto.component.html',
  styleUrls: ['./crear-piloto.component.css']
})
export class CrearPilotoComponent implements OnInit {

  piloto: Piloto;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mockService: MockService
  ) { }

  ngOnInit() {
    this.piloto = new Piloto();
  }

  createPiloto() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.piloto.escuderia = id;
    this.piloto.auto = id;
    this.mockService.createPiloto(this.piloto).subscribe(
      response => {
        console.log('siiii');
        this.router.navigate(['/escuderia/' + id]);
      }, error => {
        console.log('omg!!! ' + error);
      }
    );
  }

}
