import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ImagenPortadaComponent } from './imagen-portada/imagen-portada.component';
import { ACercaDeComponent } from './a-cerca-de/a-cerca-de.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    JumbotronComponent,
    ImagenPortadaComponent,
    ACercaDeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
