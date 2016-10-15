import {Component, OnDestroy} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <button (click)= "OnNavigate()">Go Home</button>
      <hr>
      {{id}}
    `
})
export class UserComponent implements OnDestroy{
  id: string;
  private subscription : Subscription;

  constructor(private router: Router, private activetedRoute: ActivatedRoute){
    //Give me the snapShot of this actived route. but it will not listen to the changes
  //this.id = activetedRoute.snapshot.params['id'];

    //We will use an observable (ES 6 syntax).
    //when ever the id of my route changes  the old id = the new id.
    //when ever this component (UserComponent get destroy the subscribtion will kind of live on (creatememory leack)
    //to prevent this will create private subscription : Subscription;


    this.subscription = activetedRoute.params.subscribe(
    (param : any) => this.id = param['id']
    );
  }

  OnNavigate(){

    this.router.navigate(['/'], {queryParams: {'analytics': 100}});

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
