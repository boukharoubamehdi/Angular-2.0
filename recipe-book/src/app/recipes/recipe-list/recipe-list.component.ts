import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes :Recipe [] = [];

 @Output() recipeSelected = new EventEmitter<Recipe>();
 recipe = new Recipe('Dummy','Dummy','http://sugarmamacooks.com/wp-content/uploads/2014/07/Mexican-summer-salad-with-cilantro-lime-dressing-2_small.jpg', null);

  constructor( private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  //this method will hold the selected Recipe.
  //and i want to use that to uptade (git it to recipe-detail component) the recipe-detail.
  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
