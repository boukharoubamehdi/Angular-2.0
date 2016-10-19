import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private recipeIndex: number;
  private subscription : Subscription;

  constructor( private route: ActivatedRoute,
               private recipeService: RecipeService) { }

  ngOnInit() {
    //i want to know if i'm adding or editing
    //if i'm editing i'll have : http://localhost:4200/recipes/0
    //but if i'm adding a new recipe : http://localhost:4200/recipes/new
    // as you can see i dont have in id (i will need it later on for my for init)
    let isNew = true;
    this.subscription = this.route.params.subscribe(
      (params : any) => {
        if (params.hasOwnProperty('id')){ //it means i have an id (which it means i'm editing)
          isNew = false; //i dont have a new recipe so i put it to false.
          this.recipeIndex = +params['id'];
        }else{
          isNew = true;
        }
        console.log(isNew);
      }

  );

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
