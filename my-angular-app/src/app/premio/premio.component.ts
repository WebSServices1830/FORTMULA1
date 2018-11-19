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
  nuevo: Premio;
  messageEdit: boolean;
  messageCreate: 0;

  constructor(
    private route: ActivatedRoute,
    private service: MockService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.premio = new Premio();
    this.getPremio();
  }

  getPremio(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getPremio(id).subscribe(premio => this.premio = premio);
  }

  mostrarEditar() {
    this.messageEdit = true;
    this.nuevo = new Premio();

    this.nuevo = JSON.parse(JSON.stringify(this.premio));
    console.log(this.nuevo);
  }

  editarInfo() {
    this.service.editPremio(this.nuevo).subscribe(
      response =>{
        const idP = +this.route.snapshot.paramMap.get('id');
        this.router.navigate(['/premio/' + idP]);
      });
  }

  cancel() {
    this.messageEdit = false;
  }
  
  goBack(): void {
    this.location.back();
  }

}
