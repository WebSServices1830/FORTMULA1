import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

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
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { EntrenamientosComponent } from './entrenamientos/entrenamientos.component';
import { CarreraComponent } from './carrera/carrera.component';
import { ClasificacionComponent } from './clasificacion/clasificacion.component';
import { CrearPilotoComponent } from './piloto/crear-piloto/crear-piloto.component';
import {HttpClientModule} from '@angular/common/http';
import { CrearPistaComponent } from './pista/crear-pista/crear-pista.component';
import { CrearPremioComponent } from './premio/crear-premio/crear-premio.component';
import { MockService } from './mocks/mock.service';
import { AuthService } from './mocks/auth.service';


@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,

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
    PerfilComponent,
    EntrenamientosComponent,
    CarreraComponent,
    ClasificacionComponent,
    CrearPilotoComponent,
    CrearPistaComponent,
    CrearPremioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    MockService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
