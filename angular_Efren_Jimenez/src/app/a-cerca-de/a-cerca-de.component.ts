import { Component, OnInit } from '@angular/core';
import { AutorService } from '../servicios/autor.service';

@Component({
  selector: 'app-a-cerca-de',
  templateUrl: './a-cerca-de.component.html',
  styleUrls: ['./a-cerca-de.component.css']
})
export class ACercaDeComponent implements OnInit {

  autor: any;
  curso: any;
  asignatura: any;
  
  constructor(private autorService: AutorService) { }

  ngOnInit(): void {
    this.autor=this.autorService.getAutor();
    this.curso=this.autorService.getCurso();    
    this.asignatura=this.autorService.getAsignatura();

  }
}
