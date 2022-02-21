import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  opcion1: String = 'Inicio';
  opcion2: String = 'Login';
  opcion3: String = 'Registro';
  opcion4: String = 'Acerca de'


  constructor() { }

  ngOnInit(): void {
  }

}
