import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
import {CARRERAS} from './mock-carreras';
import {Carrera} from '../models/carrera';
import {Resultado} from '../models/resultado';
import {RESULTADOS} from './mock-resultados';
import {CLASIFICACIONES} from './mock-clasificacion';
import {Clasificacion} from '../models/clasificacion';
import { API_URL } from '../constants';


@Injectable({
  providedIn: 'root'
})
export class MockService {

  private readonly apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://cad6e3b6.ngrok.io';
  }

  getHttpHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  // Escudería

  getEscuderias(): Observable<Escuderia[]> {
    const url = `${this.apiUrl}/escuderia/`;
    return this.http.get<Escuderia[]>(url);
  }
  /* getEscuderias(): Observable<Escuderia[]> {
    return of(ESCUDERIAS);
  } */

  getEscuderia(id: number ): Observable<Escuderia> {
    const url = `${this.apiUrl}/escuderia/${id}`;
    return this.http.get<Escuderia>(url);
  }
  /* getEscuderia(id: number ): Observable<Escuderia> {
    return of(ESCUDERIAS.find(escuderia => escuderia.id === id));
  } */

  createEscuderia(escuderia: Escuderia): Observable<object> {
    const url = `${this.apiUrl}/escuderia/`;
    const data = {
      escuderia: escuderia
    };
    return this.http.post<object>(url, data, this.getHttpHeaders());
  }


  getPilotos(idEscuderia: number): Observable<Piloto[]> {
    const url = API_URL + '/escuderia/' + idEscuderia + '/pilotos/';
    return this.http.get<Piloto[]>(url, this.getHttpHeaders());
  }
  /* getPilotos(idEscuderia: number): Observable<Piloto[]> {
    return of(PILOTOS.filter(piloto => piloto.escuderia === idEscuderia));
  } */

  getPilotosEntrenamiento(idPremio: number): Observable<Piloto[]> {
    const entrenamientos = ENTRENAMIENTOS.filter(entrenamiento => entrenamiento.idPremio === idPremio);
    const pilotos: Piloto[] = [];
    for (let i = 0; i < entrenamientos.length; i++) {
      pilotos[entrenamientos[i].id] = PILOTOS.find(piloto => piloto.id === entrenamientos[i].idPiloto);
    }
    return of(pilotos);
  }

  getPiloto(id: number): Observable<Piloto> {
    const url = `${this.apiUrl}/piloto/${id}`;
    return this.http.get<Piloto>(url);
  }
  /*getPiloto(id: number, idEscuderia: number): Observable<Piloto> {
    return of(PILOTOS.find(piloto => piloto.id === id && piloto.escuderia === idEscuderia));
  }*/

  getAutos(idEscuderia: number): Observable<Auto[]> {
    const url = API_URL + '/auto/' + idEscuderia;
    return this.http.get<Auto[]>(url, this.getHttpHeaders());
  }

  getAuto(id: number, idEscuderia: number): Observable<Auto> {
    const url = API_URL + '/auto/' + idEscuderia;
    return this.http.get<Auto>(url, this.getHttpHeaders());
  }

  getPremios(): Observable<Premio[]> {
    return of(PREMIOS);
  }

  // getFotos(): Observable<string[]> {
   // const fotos: string[] = [];
    // for (let i = 0; i < PREMIOS.length; i++) {
      // fotos[PREMIOS[i].id] = PISTAS[PREMIOS[i].id].foto;
    // }
    // return of(fotos);
  // }

  getPistas(): Observable<Pista[]> {
    const url = `${this.apiUrl}/premio/`;
    return this.http.get<Pista[]>(url);
  }
  /* getPistas(): Observable<Pista[]> {
    return of(PISTAS);
  } */

  getPremio(id: number): Observable<Premio> {
    return of(PREMIOS.find(premio => premio.id === id));
  }
  
  getPista(id: number ): Observable<Pista> {
    // const p = PREMIOS.find(premio => premio.id === id);
    // return of(PISTAS.find(pista => pista.id === p.idPista));
    return of(PISTAS.find(pista => pista.id === id));
  }

  getEntrenamientos(id: number): Observable<Entrenamiento[]> {
    return of(ENTRENAMIENTOS.filter(entrenamiento => entrenamiento.idPremio === id));
  }

  getCarrera(id: number): Observable<Carrera> {
    return of(CARRERAS.find(carrera => carrera.idPremio === id));
  }

  getResultadosCarrera(id: number): Observable<Resultado[]> {
    return of(RESULTADOS.filter(resultado => resultado.idSesion === id && resultado.sesion === 'carrera'));
  }

  getClasificacion(id: number): Observable<Clasificacion> {
    return of(CLASIFICACIONES.find(clasificacion => clasificacion.idPremio === id));
  }

  getResultadosQ1(id: number): Observable<Resultado[]> {
    return of(RESULTADOS.filter(resultado => resultado.idSesion === id && resultado.sesion === 'q1'));
  }

  getResultadosQ2(id: number): Observable<Resultado[]> {
    return of(RESULTADOS.filter(resultado => resultado.idSesion === id && resultado.sesion === 'q2'));
  }

  getResultadosQ3(id: number): Observable<Resultado[]> {
    return of(RESULTADOS.filter(resultado => resultado.idSesion === id && resultado.sesion === 'q3'));
  }

  getPilotosResultadosQ1(idPremio: number): Observable<Piloto[]> {
    const resultados = RESULTADOS.filter(resultado => resultado.idSesion === idPremio && resultado.sesion === 'q1');
    const pilotos: Piloto[] = [];
    for (let i = 0; i < resultados.length; i++) {
      pilotos[resultados[i].idPiloto] = PILOTOS.find(piloto => piloto.id === resultados[i].idPiloto);
    }
    return of(pilotos);
  }

  getPilotosResultadosQ2(idPremio: number): Observable<Piloto[]> {
    const resultados = RESULTADOS.filter(resultado => resultado.idSesion === idPremio && resultado.sesion === 'q2');
    const pilotos: Piloto[] = [];
    for (let i = 0; i < resultados.length; i++) {
      pilotos[resultados[i].idPiloto] = PILOTOS.find(piloto => piloto.id === resultados[i].idPiloto);
    }
    return of(pilotos);
  }

  getPilotosResultadosQ3(idPremio: number): Observable<Piloto[]> {
    const resultados = RESULTADOS.filter(resultado => resultado.idSesion === idPremio && resultado.sesion === 'q3');
    const pilotos: Piloto[] = [];
    for (let i = 0; i < resultados.length; i++) {
      pilotos[resultados[i].idPiloto] = PILOTOS.find(piloto => piloto.id === resultados[i].idPiloto);
    }
    return of(pilotos);
  }

  getPilotosCarrera(idPremio: number): Observable<Piloto[]> {
    const resultados = RESULTADOS.filter(resultado => resultado.idSesion === idPremio && resultado.sesion === 'carrera');
    const pilotos: Piloto[] = [];
    for (let i = 0; i < resultados.length; i++) {
      pilotos[resultados[i].idPiloto] = PILOTOS.find(piloto => piloto.id === resultados[i].idPiloto);
    }
    return of(pilotos);
  }

  makeComment(comment: string) {
    // TODO:
    console.log('done');
  }


}
