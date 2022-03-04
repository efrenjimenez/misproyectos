import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario.modelo';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  usuarios: any;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuarios = this.usuariosService.getUsuarios();

  }

}
