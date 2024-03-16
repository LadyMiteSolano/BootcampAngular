import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProductoDetail } from '../interface/ProductDetail.interface';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html'
})
export class DetalleproductoComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.producto);
  }
  ngOnInit(): void {
    console.log(this.producto);
  }

  @Input()
  modalProducto?: any;

  @Input()
  producto: ProductoDetail ={
    productoid: 0,
    producto: '',
    modelo: '',
    proveedor: '',
    categoria: '',
    precio: 0.00,
    stock: 0
  };


  @Output()
  eventoModal = new EventEmitter<any>();

  @Output()
  eventoCierreModal = new EventEmitter<any>();



  handleEventoModal(data: any): void{
    this.eventoModal.emit(data);
  }

  handleEventoCierreModal(data: any): void{
    this.eventoCierreModal.emit(data);
  }

}
