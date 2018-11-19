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
import { CARRERAS } from './mock-carreras';
import { Carrera } from '../models/carrera';
import { Resultado } from '../models/resultado';
import { RESULTADOS } from './mock-resultados';
import { CLASIFICACIONES } from './mock-clasificacion';
import { Clasificacion } from '../models/clasificacion';
import { forEach } from '@angular/router/src/utils/collection';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  
  constructor(private http: HttpClient) { }

  getHttpHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Token: 70caf1815bb6b042fb61a7cb8e6c66e1905e3795`,
      })
    };
  }

  getEscuderias(): Observable<Escuderia[]> {
    const url = API_URL + '/escuderia/';
    return this.http.get<Escuderia[]>(url, this.getHttpHeaders());
  }

  getEscuderia(id: number): Observable<Escuderia> {
    const url = API_URL + '/escuderia/' + id;
    return this.http.get<Escuderia>(url, this.getHttpHeaders());
  }

  createEscuderia(escuderia: Escuderia): Observable<object> {
    const url = `${API_URL}/escuderia/`;
    return this.http.post<object>(url, escuderia, this.getHttpHeaders());
  }

  editEscuderia(escuderia: Escuderia): Observable<object> {
    const url = `${API_URL}/escuderia/${escuderia.id}/`;
    return this.http.patch<object>(url, escuderia, this.getHttpHeaders());
  }

  deleteEscuderia(escuderia: Escuderia): Observable<object> {
    const url = `${API_URL}/escuderia/${escuderia.id}/`;
    return this.http.delete<object>(url, this.getHttpHeaders());
  }

  getPilotos(idEscuderia: number): Observable<Piloto[]> {
    const url = API_URL + '/escuderia/' + idEscuderia + '/pilotos';
    return this.http.get<Piloto[]>(url, this.getHttpHeaders());
  }

  geListatPilotos(): Observable<Piloto[]> {
    const url = API_URL + '/piloto/';
    return this.http.get<Piloto[]>(url, this.getHttpHeaders());
  }

  getPilotosEntrenamiento(idPremio: number): Observable<Piloto[]> {
    const entrenamientos = ENTRENAMIENTOS.filter(entrenamiento => entrenamiento.idPremio === idPremio);
    const pilotos: Piloto[] = [];
    for (let i = 0; i < entrenamientos.length; i++) {
      pilotos[entrenamientos[i].id] = PILOTOS.find(piloto => piloto.id === entrenamientos[i].idPiloto)
    }
    return of(pilotos);
  }

  getPiloto(id: number): Observable<Piloto> {
    const url = `${API_URL}/piloto/${id}`;
    return this.http.get<Piloto>(url);
  }

  createPiloto(piloto: Piloto): Observable<object> {
    const url = `${API_URL}/piloto/`;
    return this.http.post<object>(url, piloto, this.getHttpHeaders());
  }

  editPiloto(piloto: Piloto): Observable<object> {
    const url = `${API_URL}/piloto/${piloto.id}/`;
    return this.http.patch<object>(url, piloto, this.getHttpHeaders());
  }

  deletePiloto(piloto: Piloto): Observable<object> {
    const url = `${API_URL}/piloto/${piloto.id}/`;
    return this.http.delete<object>(url, this.getHttpHeaders());
  }

  getAutos(): Observable<Auto[]> {
    const url = API_URL + '/auto/';
    return this.http.get<Auto[]>(url, this.getHttpHeaders());
  }

  getAutosEscuderia(idEscuderia: number): Observable<Auto[]> {
    const url = API_URL + '/escuderia/' + idEscuderia + '/autos';
    return this.http.get<Auto[]>(url, this.getHttpHeaders());
  }

  getAuto(id: number): Observable<Auto> {
    const url = API_URL + '/auto/' + id;
    return this.http.get<Auto>(url, this.getHttpHeaders());
  }

  createAuto(auto: Auto): Observable<object> {
    const url = `${API_URL}/auto/`;
    return this.http.post<object>(url, auto, this.getHttpHeaders());
  }

  editAuto(auto: Auto): Observable<object> {
    const url = `${API_URL}/auto/${auto.id}/`;
    return this.http.patch<object>(url, auto, this.getHttpHeaders());
  }

  deleteAuto(auto: Auto): Observable<object> {
    const url = `${API_URL}/auto/${auto.id}/`;
    return this.http.delete<object>(url, this.getHttpHeaders());
  }

  getPremios(): Observable<Premio[]> {
    const url = API_URL + '/premio/';
    return this.http.get<Premio[]>(url, this.getHttpHeaders());
  }
  getPremio(id: number): Observable<Premio> {
    const url = API_URL + '/premio/' + id;
    return this.http.get<Premio>(url, this.getHttpHeaders());
  }

  editPremio(premio: Premio): Observable<object> {
    const url = API_URL + /premio/ + premio.id;
    return this.http.patch<object>(url, premio, this.getHttpHeaders());
  }

  createPremio(premio: Premio, infoPista: Pista): Observable<object> {
    const url = `${API_URL}/premio/`;
    const data = {
      ciudad: premio.ciudad,
      fecha: premio.fecha,
      campeonato: premio.campeonato,
      info_pista_id: infoPista.id,
      info_pista: infoPista
    };
    return this.http.post<object>(url, data, this.getHttpHeaders());
  }



  /*getFotos(): Observable<string[]> {
    const fotos: string[] = [];
    for (let i = 0; i < PREMIOS.length; i++) {
      fotos[PREMIOS[i].id] = PISTAS[PREMIOS[i].id].foto;
    }
    return of(fotos);
  }*/

  getPistas(): Observable<Pista[]> {
    const url = API_URL + '/lista-pistas/';
    return this.http.get<Pista[]>(url, this.getHttpHeaders());
  }


  getPista(id: number): Observable<Pista> {
    const url = API_URL + '/pista/' + id;
    return this.http.get<Pista>(url, this.getHttpHeaders());
  }

  getEntrenamientos(id: number): Observable<Entrenamiento[]> {
    return of(ENTRENAMIENTOS.filter(entrenamiento => entrenamiento.idPremio === id));
  }

  getCarrera(id: number): Observable<Carrera> {
    const url = API_URL + '/Carrera/' + id;
    return this.http.get<Carrera>(url, this.getHttpHeaders());
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

  getPilotosResultadosQ1(idPremio: number): Observable<Resultado[]> {
    return this.http.get<Resultado[]>(API_URL + "/premio/" + idPremio + "/q1/", this.getHttpHeaders());
  }

  getPilotosResultadosQ2(idPremio: number): Observable<Piloto[]> {
    const resultados = RESULTADOS.filter(resultado => resultado.idSesion === idPremio && resultado.sesion === 'q2');
    const pilotos: Piloto[] = [];
    for (let i = 0; i < resultados.length; i++) {
      pilotos[resultados[i].idPiloto] = PILOTOS.find(piloto => piloto.id === resultados[i].idPiloto)
    }
    return of(pilotos);
  }

  getPilotosResultadosQ3(idPremio: number): Observable<Piloto[]> {
    const resultados = RESULTADOS.filter(resultado => resultado.idSesion === idPremio && resultado.sesion === 'q3');
    const pilotos: Piloto[] = [];
    for (let i = 0; i < resultados.length; i++) {
      pilotos[resultados[i].idPiloto] = PILOTOS.find(piloto => piloto.id === resultados[i].idPiloto)
    }
    return of(pilotos);
  }

  getPilotosCarrera(idPremio: number): Observable<Piloto[]> {
    const resultados = RESULTADOS.filter(resultado => resultado.idSesion === idPremio && resultado.sesion === 'carrera');
    const pilotos: Piloto[] = [];
    for (let i = 0; i < resultados.length; i++) {
      pilotos[resultados[i].idPiloto] = PILOTOS.find(piloto => piloto.id === resultados[i].idPiloto)
    }
    return of(pilotos);
  }

  makeComment(comment: string) {
    // TODO:
    console.log("done");
  }
}
