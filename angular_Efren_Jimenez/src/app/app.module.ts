import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ImagenPortadaComponent } from './imagen-portada/imagen-portada.component';
import { ACercaDeComponent } from './a-cerca-de/a-cerca-de.component';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FechaComponent } from './fecha/fecha.component';
import { SaludoComponent } from './saludo/saludo.component';


const routes: Routes = [
  { path: '', component: JumbotronComponent },
  { path: 'acercade', component: ACercaDeComponent },
  { path: '**', component: JumbotronComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    JumbotronComponent,
    ImagenPortadaComponent,
    ACercaDeComponent,
    FooterComponent,
    FechaComponent,
    SaludoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
