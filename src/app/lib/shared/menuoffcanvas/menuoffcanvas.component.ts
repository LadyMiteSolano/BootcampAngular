import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { PropertiesItem } from '../../../interfaces/menuitem.interface';

@Component({
  selector: 'app-menuoffcanvas',
  templateUrl: './menuoffcanvas.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuoffcanvasComponent implements OnInit{
  

  idrol: number = 2; 
  show: boolean = false;

  @Input()
  menuItems!: PropertiesItem[];

  menuItemsRol: PropertiesItem[] = [];

  open(){
    this.show = true;
  }

  close(){
    this.show = false;
  }

  ngOnInit(): void {
    for(let i = 0; i < this.menuItems.length; i++){
      if(this.menuItems[i].idrol === this.idrol){
        this.menuItemsRol.push(this.menuItems[i])
      }
    }
  }
}
