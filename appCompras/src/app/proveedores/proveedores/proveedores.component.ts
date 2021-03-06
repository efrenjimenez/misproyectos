import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../../servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  //mensaje: string="";
  proveedores: any;

  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit() {
    //this.mensaje = this.proveedoresService.getProveedores( );
    this.proveedores = this.proveedoresService.getProveedores()
  }

}
