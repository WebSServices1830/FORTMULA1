import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Escuderia } from '../models/escuderia';
import { ESCUDERIAS } from '../mocks/mock-escuderias';
import { Piloto } from '../models/piloto';
import { PILOTOS } from '../mocks/mock-pilotos';
import { Auto } from '../models/auto';
import { AUTOS } from '../mocks/mock-autos';
import { Premio } from '../models/premio';
import { PREMIOS } from '../mocks/mock-preimos';
import { Pista } from '../models/pista';
import { PISTAS } from '../mocks/mock-pistas';
import { Entrenamiento } from '../models/entrenamiento';
import { ENTRENAMIENTOS } from '../mocks/mock-entrenamientos';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  getEscuderias(): Observable<Escuderia[]> {
    return of(ESCUDERIAS);
  }

  getEscuderia(id: number ): Observable<Escuderia> {
    return of(ESCUDERIAS.find(escuderia => escuderia.id === id));
  }

  getPilotos(idEscuderia: number): Observable<Piloto[]> {
    return of(PILOTOS.filter(piloto => piloto.idEscuderia === idEscuderia));
  }

  getPiloto(id: number, idEscuderia: number): Observable<Piloto> {
    return of(PILOTOS.find(piloto => piloto.id === id && piloto.idEscuderia === idEscuderia));
  }

  getAutos(idEscuderia: number): Observable<Auto[]> {
    return of(AUTOS.filter(auto => auto.idEscuderia === idEscuderia));
  }

  getAuto(id: number, idEscuderia: number): Observable<Auto> {
    return of(AUTOS.find(auto => auto.id === id && auto.idEscuderia === idEscuderia));
  }

  getPremios(): Observable<Premio[]> {
    return of(PREMIOS);
  }

  getPremio(id: number ): Observable<Premio> {
    return of(PREMIOS.find(premio => premio.id === id));
  }

  getPista(id: number ): Observable<Pista> {
    const p = PREMIOS.find(premio => premio.id === id);
    return of(PISTAS.find(pista => pista.id === p.idPista));
  }

  getEntrenamientos(id: number): Observable<Entrenamiento[]> {
    return of(ENTRENAMIENTOS.filter(entrenamiento => entrenamiento.idPremio === id));
  }

  makeComment(comment: string) {
    // TODO:
    console.log("done");
  }
}
