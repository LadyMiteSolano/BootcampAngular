import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupreactivoComponent } from './signupreactivo/signupreactivo.component';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    AutenticacionComponent,
    SignupComponent,
    SignupreactivoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AutenticacionRoutingModule
  ],
  exports:[
    LoginComponent,
    AutenticacionComponent,
    SignupComponent,
    SignupreactivoComponent
  ]
})
export class AutenticacionModule { }
