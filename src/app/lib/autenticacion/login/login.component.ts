import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [Router]
})
export class LoginComponent {

  private route: Router;

  constructor(route: Router){
    this.route = route;
  }

  @Output()
  evento = new EventEmitter<boolean>();

  usermailPredeterminado = 'jeyson@mail.com';
  passUserPredeterminado = '123456';
  mensajelogin = '';

  emailUser: string = '';
  password: string = '';
  tituloform: string = 'Titulo de form';

  /*saludar(){
    this.mensajelogin = 'Bienvenido user: '+this.emailUser;
  }*/

  login(){
    if(this.emailUser === this.usermailPredeterminado){
      if(this.password === this.passUserPredeterminado){
        this.route.navigate(['/table']);
        this.mensajelogin = 'ACCESO EXITOSO!'
      }else {
        this.mensajelogin = 'CONTRASEÑA INCORRECTA'
      }
    }else{
      this.mensajelogin = 'USUARIO NO SE ENCUENTRA REGISTRADO'
    }
  }
  cambioARegistro(){
    this.evento.emit(false);
  }
}
