//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Servicios
import { UsuariosService } from './servicios/usuarios.service';

//Componentes
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ImagenPortadaComponent } from './imagen-portada/imagen-portada.component';
import { ACercaDeComponent } from './a-cerca-de/a-cerca-de.component';
import { FooterComponent } from './footer/footer.component';
import { FechaComponent } from './fecha/fecha.component';
import { SaludoComponent } from './saludo/saludo.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { InputTwoWayComponent } from './input-two-way/input-two-way.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { LoginComponent } from './login/login.component';

//Rutas
const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'acercade', component: ACercaDeComponent },
  { path: 'registro', component: FormularioComponent },
  { path: 'login', component: LoginComponent},
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
    FormularioComponent,
    CarruselComponent,
    LoginComponent
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
