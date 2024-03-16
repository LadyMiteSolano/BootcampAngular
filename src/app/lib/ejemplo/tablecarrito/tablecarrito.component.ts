import { Component, EventEmitter, Output } from '@angular/core';
import { ProductoDetail } from '../interface/ProductDetail.interface';
import { PropertiesBtnTabla } from '../../../interfaces/botonestabla.interface';

@Component({
  selector: 'app-tablecarrito',
  templateUrl: './tablecarrito.component.html'
})
export class TablecarritoComponent {

  @Output()
  eventEliminar= new EventEmitter<ProductoDetail>();

  btnTablaProperties : PropertiesBtnTabla = {
    mostrarEditar: false,
    mostrarEliminar: true,
    labelEliminar: 'Quitar',
    labelEditar: '',
    bootstrapEditar: '',
    bootstrapEliminar: 'success'

  };

  listaCarrito: ProductoDetail[] = [];


  eventoLog(){
    console.log('Impresión');
  }

  eventoEliminar(producto: ProductoDetail){
    this.eventEliminar.emit(producto);
  }
}
