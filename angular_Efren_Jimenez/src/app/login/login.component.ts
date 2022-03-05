import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalstorageService } from '../servicios/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('formlog') formlog!: NgForm;
  cont: number=0;
  login: any;

  constructor(private LocalstorageService: LocalstorageService) {
    this.login = {
      nick:'',
      password:''
    }
  }

  onSubmit(){
    this.login.id=this.cont;
    this.login.nick=this.formlog.value.nick;
    this.login.password=this.formlog.value.password;

    this.LocalstorageService.set(this.login.nick+"login", this.login.password);

    this.formlog.reset();
  }

  ngOnInit(): void {
  }

}
