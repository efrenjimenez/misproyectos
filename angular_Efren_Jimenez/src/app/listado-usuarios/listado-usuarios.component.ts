import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario.modelo';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  public usuarios: Array<Usuario> = [
    {id: 1 , nombre: 'Juan', password: 'juan1234'},
    {id: 2 , nombre: 'Pedro', password: 'pedro1234'},
    {id: 3 , nombre: 'Luis', password: 'luis1234'}
];

  constructor() { }

  ngOnInit(): void {
  }

}
