import { Component, OnInit } from '@angular/core';
import { ProductoDetail } from '../interface/ProductDetail.interface';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-editarproducto',
  templateUrl: './editarproducto.component.html',
})
export class EditarproductoComponent implements OnInit{

  idproducto!: number;
  nombreProducto!: string;

  constructor(private readonly router: ActivatedRoute){}


  listaproducto: ProductoDetail[] = [
  {
    "productoid": 1,
    "producto": "Play Station 5",
    "modelo": "Ultra Slim",
    "proveedor": "H&B sa",
    "precio": 600.00,
    "stock": 40,
    "categoria": "OC",
    "accesorios": {
      "incluyecontrol": 1,
      "incluyegearAR": 0
    }
  },
  {
    "productoid": 2,
    "producto": "PC Gammer",
    "modelo": "AS-001-wm",
    "proveedor": "Asus",
    "precio": 850.00,
    "stock": 2000,
    "categoria": "OC",
    "accesorios": {
      "incluyemouse": 0
    }
  },
  {
    "productoid": 3,
    "producto": "MousePad",
    "modelo": "MP-2001-A",
    "proveedor": "Juan Marcet",
    "precio": 10.00,
    "stock": 3,
    "categoria": "VA",
    "accesorios": {}
  },
  {
    "productoid": 4,
    "producto": "Doppler",
    "modelo": "2HXDB",
    "proveedor": "General Electric",
    "precio": 120.00,
    "stock": 11,
    "categoria": "HT"
  },
  {
    "productoid": 5,
    "producto": "AirFried",
    "modelo": "ZY 2020",
    "proveedor": "Hometech",
    "precio": 230.00,
    "stock": 20,
    "categoria": "CO",
    "accesorios": {

    }
  },
  {
    "productoid": 6,
    "producto": "Parlante",
    "modelo": "ABC 123",
    "proveedor": "Bosse",
    "precio": 190.00,
    "stock": 1,
    "categoria": "VA",
    "accesorios": {

    }
  },
  {
    "productoid": 7,
    "producto": "Aro de luz",
    "modelo": "XYZ 987",
    "proveedor": "Castell",
    "precio": 90.00,
    "stock": 11,
    "categoria": "VA",
    "accesorios": {

    }
  }
];

productoSeleccionado!: ProductoDetail;/* = {
  productoid: 0,
  producto: '',
  modelo: '',
  categoria: '',
  precio: 0.00,
  proveedor: '',
  stock: 0
};*/

  ngOnInit(): void{
    this.router.queryParams.subscribe(
      (params: Params) =>{
        this.idproducto = params['idproducto'];
        this.nombreProducto = params['nombre'];
      }
    );
    this.productoSeleccionado = this.listaproducto.find( producto => producto.productoid == this.idproducto)!;
  }

}
