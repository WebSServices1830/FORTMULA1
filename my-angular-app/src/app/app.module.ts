import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    CalendarioComponent,
    ListaPremioComponent,
    PremioComponent,
    ListaEscuderiaComponent,
    EscuderiaComponent,
    ListaPilotoComponent,
    PilotoComponent,
    AutoComponent,
    ListaApuestasComponent,
    ApuestaComponent,
    ListaPistaComponent,
    PistaComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
