import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  clase="btn btn-warning btn-lg"

  srcFoto="../assets/img/inicio.jpg"

  cambiarFoto(){
    if(this.srcFoto=="../assets/img/inicio.jpg"){
      this.srcFoto="../assets/img/t1_completa2.jpg"
      console.log("primero")
    }
    else if(this.srcFoto!="../assets/img/inicio.jpg"){
      console.log("segundo")
      this.srcFoto="../assets/img/inicio.jpg"
    }
  }

  constructor() { 
      setInterval(() => {
            this.clase= 'btn btn-success btn-lg';
            setTimeout(() => {
              this.clase= 'btn btn-warning btn-lg';
        }, 1000);
      }, 4000);

  }

  ngOnInit(): void {
  }

}
