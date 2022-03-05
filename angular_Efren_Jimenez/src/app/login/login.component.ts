import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('formlog') formlog!: NgForm;
  login: any;

  constructor() {
    this.login = {
      email:'',
      password:''
    }
  }

  onSubmit(){
    this.login.nombre=this.formlog.value.email;
    this.login.nombre=this.formlog.value.password;


    this.formlog.reset();
  }

  ngOnInit(): void {
  }

}
