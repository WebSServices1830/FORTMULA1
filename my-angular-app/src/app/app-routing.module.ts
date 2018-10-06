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

const routes: Routes = [
  { path: 'apuesta/:id', component: ApuestaComponent },
  { path: 'auto/:id', component: AutoComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'escuderia/:id', component: EscuderiaComponent },
  { path: 'lista-apuestas/:id', component: ListaApuestasComponent },
  { path: 'lista-escuderia', component: ListaEscuderiaComponent },
  { path: 'lista-piloto/:id', component: ListaPilotoComponent },
  { path: 'lista-pista', component: ListaPistaComponent },
  { path: 'lista-premio/:id', component: ListaPremioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil/:id', component: PerfilComponent },
  { path: 'piloto/:id', component: PilotoComponent },
  { path: 'pista/:id', component: PistaComponent },
  { path: 'premio/:id', component: PremioComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: '', redirectTo: '/calendario', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
