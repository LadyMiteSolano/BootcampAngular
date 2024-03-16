import { Component } from '@angular/core';
import { PropertiesBtnTabla } from './interfaces/botonestabla.interface';
import { PropertiesItem } from './interfaces/menuitem.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bootcampng';

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

  propiedadesBtnTb: PropertiesBtnTabla = {
    labelEditar: 'Editar',
    labelEliminar: 'Remover',
    mostrarEditar: true,
    mostrarEliminar: true,
    bootstrapEditar: 'success',
    bootstrapEliminar: 'danger'
  }
}
