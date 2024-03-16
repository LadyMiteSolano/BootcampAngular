import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PropertiesItem } from '../../../interfaces/menuitem.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit, OnChanges {
  @Input()
  menuItems: PropertiesItem[] = [];
  
  rolUser: number = 2;

  menuItemsPorRol: PropertiesItem[] = [];
  
  ngOnChanges(changes: SimpleChanges): void {
  }
  

  ngOnInit(): void {
    this.menuItemsPorRol = this.menuItems.filter(item => item.idrol === this.rolUser);
  }


}
