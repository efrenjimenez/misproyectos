import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @ViewChild('formusu') formusu!: NgForm;
  usuario: any;

  constructor() {
    this.usuario = {
      nombre:'',
      apellidos:'',
      email:'',
      password:'',
      fechaNac:'',
    }
  }

  onSubmit(){
    this.usuario.nombre=this.formusu.value.nombre;
    this.usuario.apellidos=this.formusu.value.apellidos;
    this.usuario.email=this.formusu.value.email;
    this.usuario.password=this.formusu.value.password;
    this.usuario.fechaNac=this.formusu.value.fechaNac;

    this.formusu.reset();
  }

  ngOnInit(): void {
  }

}
