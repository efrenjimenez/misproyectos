import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario.modelo';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public usuarios: Array<Usuario> = [
    {id: 1 , nombre: 'Juan', password: 'juan1234'},
    {id: 2 , nombre: 'Pedro', password: 'pedro1234'},
    {id: 3 , nombre: 'Luis', password: 'luis1234'}
  ];

  getUsuarios(){
    return this.usuarios;
}

  constructor() { }
}
