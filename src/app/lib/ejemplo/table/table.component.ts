import { AfterViewChecked, Component, DoCheck, ElementRef, ViewChild } from '@angular/core';
import { ProductoDetail } from '../interface/ProductDetail.interface';
import { PropertiesBtnTabla } from '../../../interfaces/botonestabla.interface';
import { PropertiesItem } from '../../../interfaces/menuitem.interface';
import { TablecarritoComponent } from '../tablecarrito/tablecarrito.component';
import { ValorespagoComponent } from '../valorespago/valorespago.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent {

  @ViewChild(TablecarritoComponent)
  tableCarrito!: TablecarritoComponent;

  @ViewChild(ValorespagoComponent)
  valoresPago!: ValorespagoComponent;

  @ViewChild('divAgregarProducto', { static: false })
  divAgregarProducto!: ElementRef;


  opciones: PropertiesItem[] = [
    {
      idopcion: 1,
      idrol: 1,
      ruta: "/listaproducto",
      opcion: "Productos",
      icon: "house-door-fill"
    },
    {
      "idopcion": 4,
      "idrol": 1,
      "ruta": "/users",
      "opcion": "Users",
      "icon": "person-fill-gear"
    },
    {
      "idopcion": 1,
      "idrol": 2,
      "ruta": "/listaproducto",
      "opcion": "Productos",
      "icon": "house-door-fill"
    },
    {
      "idopcion": 1,
      "idrol": 3,
      "ruta": "/listaproducto",
      "opcion": "Productos",
      "icon": "house-door-fill"
    },
    {
      "idopcion": 2,
      "idrol": 2,
      "ruta": "/table",
      "opcion": "Comprar",
      "icon": "cart-fill"
    },
    {
      "idopcion": 2,
      "idrol": 3,
      "ruta": "/table",
      "opcion": "Comprar",
      "icon": "cart-fill"
    },
    {
      "idopcion": 3,
      "idrol": 2,
      "ruta": "/docs",
      "opcion": "Docs",
      "icon": "clipboard2-fill"
    }
  ];

  btnTablaProperties: PropertiesBtnTabla = {
    mostrarEditar: false,
    mostrarEliminar: true,
    labelEliminar: 'Quitar',
    labelEditar: '',
    bootstrapEditar: '',
    bootstrapEliminar: 'success'

  };

  totalProductos: number = 0;
  subtotal: number = 0;
  impuesto: number = 0;
  totalPago: number = 0;

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
    }
  ];


  agregarProducto(producto: ProductoDetail) {
    this.tableCarrito.eventoLog();
    if (this.tableCarrito.listaCarrito.length === 0) {
      producto.cantidad = 1;
      this.tableCarrito.listaCarrito.push(producto);
    } else {
      let productoAgg = this.tableCarrito.listaCarrito.filter(reg => reg.productoid === producto.productoid);
      if (productoAgg.length > 0) {
        this.tableCarrito.listaCarrito.forEach(productoCarrito => {
          if (productoCarrito.productoid === producto.productoid) {
            if (productoCarrito.cantidad != undefined) {
              productoCarrito.cantidad += 1;
            }
          }
        });
      } else {
        producto.cantidad = 1;
        this.tableCarrito.listaCarrito.push(producto);
      }
    }
    this.realizarCalculo();
    this.validarCarrito();
  }

  eliminarProducto(producto: ProductoDetail) {
    let posicionProducto = this.tableCarrito.listaCarrito.indexOf(producto);
    this.tableCarrito.listaCarrito.splice(posicionProducto, 1);
    this.validarCarrito();
    this.realizarCalculo();
  }

  realizarCalculo() {
    if (this.tableCarrito.listaCarrito.length == 0) {
      this.totalProductos = 0;
      this.subtotal = 0;
      this.impuesto = 0;
      this.totalPago = 0;
    }
    this.tableCarrito.listaCarrito.forEach(producto => {
      this.totalProductos += producto.cantidad ?? 0;
      this.subtotal += (producto.precio * (producto.cantidad ?? 0));
      this.impuesto += (producto.precio * (producto.cantidad ?? 0)) * 0.12;
      this.totalPago += this.subtotal + this.impuesto;
    })
  }

  validarStock(prodSeleccionado: ProductoDetail): boolean {
    let isValid: boolean = true;
    this.listaproducto.forEach(producto => {
      if (producto.productoid === prodSeleccionado.productoid) {
        let cantidad = prodSeleccionado.cantidad ?? 0;
        if (producto.stock > cantidad) {
          isValid = true;
        } else {
          isValid = false;
        }
      }
    });
    return isValid;
  }

  nuevoProducto(producto: ProductoDetail) {
    let ultimoId = this.listaproducto.length + 1;
    producto.productoid = ultimoId;
    this.listaproducto.push(producto);
  }

  mensajeCerrar(e: any) {

  }

  validarCarrito() {
    if (this.tableCarrito.listaCarrito.length !== 0) {
      this.divAgregarProducto.nativeElement.style.display = 'none'
    } else {
      this.divAgregarProducto.nativeElement.style.display = 'flex';
    }
  }


  /*ngAfterViewChecked(): void {
    if(this.tableCarrito.listaCarrito.length == 0){
      this.valoresPago.totalProductos = 0;
      this.valoresPago.subtotal = 0;
      this.valoresPago.impuesto = 0;
      this.valoresPago.totalPago = 0;
    } 
    this.tableCarrito.listaCarrito.forEach(producto =>{
      this.valoresPago.totalProductos += producto.cantidad ?? 0;
      this.valoresPago.subtotal += (producto.precio * (producto.cantidad ?? 0));
      this.valoresPago.impuesto += (producto.precio * (producto.cantidad ?? 0)) * 0.12;
      this.valoresPago.totalPago +=this.subtotal + this.impuesto;
    })
  }*/



  //ngAfterViewChecked(): void {

  //}
}
