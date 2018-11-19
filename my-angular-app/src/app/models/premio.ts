import {Pista} from './pista';

export class Premio {
  id: number;
  created: string;
  updated: string;
  ciudad: string;
  fecha: string;
  campeonato: number;
  info_pista: Pista;
}

/*export class Premio {
  id: number;
  created: string;
  updated: string;
  ciudad: string;
  fecha: string;
  campeonato: number;
  info_pista: {
    id: number;
    created: string;
    updated: string;
    descripcion: string;
    foto: string;
    longitud: string;
    nombre: string;
    tiempo_ganador: string;
    ganador: string;
  };
}*/
