import {Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../recipe';
import { ShoppingListService } from "../../shopping-list/shopping-list.service";


@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // Later on i'll fetch this through routing.
  //For now ill fetch this through property binding.
  @Input() selectedRecipe: Recipe; // creating a property named selectedRecipe

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList(){
    this.shoppingListService.addItems(this.selectedRecipe.ingredients);
  }

}
