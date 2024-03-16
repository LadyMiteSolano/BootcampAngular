import { AfterViewInit, Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Toast } from 'bootstrap';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent{
  
  constructor(private renderer: Renderer2){}

  @ViewChild('toastAlertForm', {static: true}) toastAlert!: ElementRef;

  @Output()
  eventoSignup = new EventEmitter<any>();


  nombre: string = '';
  apellido: string = '';
  celular: string = '';
  email: string = '';
  password: string = '';
  passwordConfirm: String = '';

  formInvalido: boolean = true;

  signup(form: NgForm){
    if(form.valid){

      alert("Todo ok")
    } else {
      this.formInvalido = true;
        const toastBootstrap = new Toast(this.toastAlert.nativeElement);
        toastBootstrap.show();
    }
    console.log("Prueba de submit"+ form.value);
  }

  volver(){
    this.eventoSignup.emit(true);
  }



}
