import { Component } from '@angular/core';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html'
})
export class AutenticacionComponent {

  pageLogin: boolean = true;

  ocultarLogin(ocultar: boolean){
    this.pageLogin = ocultar;
    //console.log('Hola componente hijo');
  }

}
