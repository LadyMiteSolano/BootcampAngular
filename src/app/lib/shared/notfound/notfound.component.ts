import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  providers: [Router]
})
export class NotfoundComponent {


  private route: Router;

  constructor(route: Router){
    this.route = route;
  }

  goToLogin(){
    this.route.navigate(['/login']);
  }


}