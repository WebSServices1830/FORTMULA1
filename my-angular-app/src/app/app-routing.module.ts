import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { ListaPremioComponent } from './lista-premio/lista-premio.component';
import { PremioComponent } from './premio/premio.component';
import { ListaEscuderiaComponent } from './lista-escuderia/lista-escuderia.component';
import { EscuderiaComponent } from './escuderia/escuderia.component';
import { ListaPilotoComponent } from './lista-piloto/lista-piloto.component';
import { PilotoComponent } from './piloto/piloto.component';
import { AutoComponent } from './auto/auto.component';
import { ListaApuestasComponent } from './lista-apuestas/lista-apuestas.component';
import { ApuestaComponent } from './apuesta/apuesta.component';
import { ListaPistaComponent } from './lista-pista/lista-pista.component';
import { PistaComponent } from './pista/pista.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EntrenamientosComponent } from './entrenamientos/entrenamientos.component';
import {CarreraComponent} from './carrera/carrera.component';
import {ClasificacionComponent} from './clasificacion/clasificacion.component';
import {CrearPilotoComponent} from './piloto/crear-piloto/crear-piloto.component';

const routes: Routes = [
  { path: 'apuesta/:id', component: ApuestaComponent },
  { path: 'escuderia/:id/auto/:idA', component: AutoComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'escuderia/:id', component: EscuderiaComponent },
  { path: 'lista-apuestas/:id', component: ListaApuestasComponent },
  { path: 'lista-escuderia', component: ListaEscuderiaComponent },
  { path: 'lista-piloto/:id', component: ListaPilotoComponent },
  { path: 'lista-pista', component: ListaPistaComponent },
  { path: 'lista-premio', component: ListaPremioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil/:id', component: PerfilComponent },
  { path: 'escuderia/:id/piloto/:idP', component: PilotoComponent },

  { path: 'escuderia/:id/piloto', component: CrearPilotoComponent },

  { path: 'pista/:id', component: PistaComponent },
  { path: 'premio/:id', component: PremioComponent },
  { path: 'premio/:id/entrenamientos', component: EntrenamientosComponent },
  { path: 'premio/:id/clasificacion', component: ClasificacionComponent },
  { path: 'premio/:id/carrera', component: CarreraComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: '', redirectTo: '/calendario', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
