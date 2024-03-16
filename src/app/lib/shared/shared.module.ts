import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonestablaComponent } from './botonestabla/botonestabla.component';
import { HeaderComponent } from './header/header.component';
import { InputformComponent } from './inputform/inputform.component';
import { LoadingComponent } from './loading/loading.component';
import { MenuComponent } from './menu/menu.component';
import { AgregarproductoComponent } from './agregarproducto/agregarproducto.component';
import { FormsModule } from '@angular/forms';
import { GeneralpipePipe } from './generalpipe.pipe';
import { NotfoundComponent } from './notfound/notfound.component';
import { MenuoffcanvasComponent } from './menuoffcanvas/menuoffcanvas.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BotonestablaComponent,
    HeaderComponent,
    InputformComponent,
    LoadingComponent,
    MenuComponent,
    AgregarproductoComponent,
    GeneralpipePipe,
    NotfoundComponent,
    MenuoffcanvasComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    BotonestablaComponent,
    HeaderComponent,
    InputformComponent,
    LoadingComponent,
    MenuComponent,
    AgregarproductoComponent,
    GeneralpipePipe,
    NotfoundComponent,
    MenuoffcanvasComponent
  ]
})
export class SharedModule { }
