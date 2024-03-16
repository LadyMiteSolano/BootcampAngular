import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteejemploComponent } from './lib/componenteejemplo/componenteejemplo.component';
import { FormsModule } from '@angular/forms';
import { AutenticacionModule } from './lib/autenticacion/autenticacion.module';
import { EjemploModule } from './lib/ejemplo/ejemplo.module';
import { SharedModule } from './lib/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteejemploComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AutenticacionModule,
    EjemploModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
