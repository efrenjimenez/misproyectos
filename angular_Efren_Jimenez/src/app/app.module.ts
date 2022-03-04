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
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { InputTwoWayComponent } from './input-two-way/input-two-way.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { FormularioComponent } from './formulario/formulario.component';
import { UsuariosService } from './servicios/usuarios.service';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'acercade', component: ACercaDeComponent },
  { path: 'registro', component: FormularioComponent },
  { path: '**', component: InicioComponent}
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
    SaludoComponent,
    ListadoUsuariosComponent,
    InputTwoWayComponent,
    InicioComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
