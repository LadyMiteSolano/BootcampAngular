import { Component } from '@angular/core';

@Component({
  selector: 'app-valorespago',
  templateUrl: './valorespago.component.html'
})
export class ValorespagoComponent {

  totalProductos: number = 0;
  subtotal: number = 0;
  impuesto: number = 0;
  totalPago: number = 0;

  
}
