import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { DetalleproductoComponent } from './detalleproducto/detalleproducto.component';
import { TablecarritoComponent } from './tablecarrito/tablecarrito.component';
import { ValorespagoComponent } from './valorespago/valorespago.component';
import { ListaproductoComponent } from './listaproducto/listaproducto.component';
import { EditarproductoComponent } from './editarproducto/editarproducto.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    TableComponent,
    DetalleproductoComponent,
    TablecarritoComponent,
    ValorespagoComponent,
    ListaproductoComponent,
    EditarproductoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterLink
  ],
  exports:[
    TableComponent,
    DetalleproductoComponent
  ]
})
export class EjemploModule { }
