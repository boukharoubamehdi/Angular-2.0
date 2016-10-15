import { Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <a [routerLink]= "['/user']" >User</a>
      <a [routerLink]= "['../']" >Home</a>
      <button (click)= "OnNavigate()">Go Home</button>
    `
})
export class UserComponent {
  constructor(private router: Router){


  }

  OnNavigate(){
    // this.router.navigate(['/']);
    this.router.navigate(['/']);

  }
}
