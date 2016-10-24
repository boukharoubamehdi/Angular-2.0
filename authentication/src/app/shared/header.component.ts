import {Component, OnDestroy} from "@angular/core";
import { AuthService } from "./aut.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'aut-header',
  template: `
       
        <header>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
        
                    <ul class="nav navbar-nav">
        
                        <li><a [routerLink]="['signup']">Sign Up</a></li>
                        <li><a [routerLink]="['signin']">Sign In</a></li>
                        <li><a [routerLink]="['protected']">Protected</a></li>
        
                    </ul>
                    <ul class="nav navbar-nav navbar-right" *ngIf="isAuth()">
        
                        <li><a (click)="onLogout()" style="cursor: pointer;">Logout</a></li>
                    </ul>
                </div><!-- /.container-fluid -->
        
            </nav>
        
        </header>
    `
})
export class HeaderComponent implements OnDestroy{
  //in order to store the current State in the header.Component
  isAuthenticated = false;
  // i want to store the subscription so that i can unsubscription
  private subscription: Subscription;


  constructor(private authService: AuthService) {
     this.subscription = this.authService.isAuthenticated().subscribe(
      //i will get the real state of isAuthenticated (true or false which means i'm i authenticated  or not)
      // from the server.
       authStatus => this.isAuthenticated = authStatus
     );
  }

  isAuth() {
    return this.isAuthenticated;
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
