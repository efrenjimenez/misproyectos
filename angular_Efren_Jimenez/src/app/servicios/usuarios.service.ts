import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario.modelo';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public usuarios: Array<Usuario> = [
    {id:1, nombre: 'Juan', apellidos: 'Pérez López', email:'juanperez@correo.com', fechaNac:'11-02-1990', nick:'jperez', password: 'juan1234'},
    {id:2, nombre: 'Pepe', apellidos: 'Jiméneza García', email:'pepejimenez@correo.com', fechaNac:'30-01-1980', nick:'pjimenez', password: 'pepe1234'}
  ];

  getUsuarios(){
    return this.usuarios;
}

  insertUsuario(usuario: Usuario){
    this.usuarios.push(usuario)
  }

  setUsuario(key: string, usuario: Usuario): void {
    try {
      localStorage.setItem(key, JSON.stringify(usuario));
    } catch (e) {
      console.error('Error al guardar', e);
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key) || '{}');
    } catch (e) {
      console.error('Error recpuerar', e);
      return null;
    }
  }

  constructor() { }
}
