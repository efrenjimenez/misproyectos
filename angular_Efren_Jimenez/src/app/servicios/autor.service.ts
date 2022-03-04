import { getModuleFactory, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  autor={nombre: 'Efrén', apellidos: 'Jiménez Carrión'};
  curso: String='2º DAW';
  asignatura: String='Desarrollo Web en Entorno Cliente'

  getAutor(){
    return this.autor;
  }

  getCurso(){
    return this.curso;
  }

  getAsignatura(){
    return this.asignatura;
  }

  constructor() { }
}
