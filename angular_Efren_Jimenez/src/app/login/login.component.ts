import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from '../modelos/login.modelo';
import { LocalstorageService } from '../servicios/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('formlog') formlog!: NgForm;
  cont: number=0;
  login: Login;

  constructor(private LocalstorageService: LocalstorageService) {
    this.login = {
      nick:'',
      password:''
    }
  }

  onSubmit(){
    this.login.nick=this.formlog.value.nick;
    this.login.password=this.formlog.value.password;

    this.LocalstorageService.set(this.login.nick+"Login", this.login);

    this.formlog.reset();
  }

  ngOnInit(): void {
  }

}
