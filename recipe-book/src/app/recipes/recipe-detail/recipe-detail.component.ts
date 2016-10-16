import {Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from '../recipe';
import { ShoppingListService } from "../../shopping-list/shopping-list.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {RecipeService} from "../recipe.service";


@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  // Later on i'll fetch this through routing.
  //For now ill fetch this through property binding.
  //@Input() selectedRecipe: Recipe; // creating a property named selectedRecipe

  //through routing:
  selectedRecipe: Recipe;
  private subscription: Subscription;
  private recipeIndex : number;

  constructor(private shoppingListService : ShoppingListService, private route: ActivatedRoute,
  private recipeService: RecipeService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params:any) =>{
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);

      }

    );

  }

  onAddToShoppingList(){
    this.shoppingListService.addItems(this.selectedRecipe.ingredients);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
