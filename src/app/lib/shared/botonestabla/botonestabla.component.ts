import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PropertiesBtnTabla } from '../../../interfaces/botonestabla.interface';

@Component({
  selector: 'app-botonestabla',
  templateUrl: './botonestabla.component.html'
})
export class BotonestablaComponent {

  @Output()
  eventoEliminar = new EventEmitter();

  @Output()
  eventoEditar = new EventEmitter();

  @Input()
  propertiesBtn: PropertiesBtnTabla = {
    labelEditar: 'Actualizar',
    labelEliminar: 'Eliminar',
    mostrarEditar: true,
    mostrarEliminar: true,
    bootstrapEditar: 'primary',
    bootstrapEliminar: 'warning'
  };

  eventEliminar(){
    this.eventoEliminar.emit();
  }

  eventEditar(){
    this.eventoEditar.emit();
  }

}
