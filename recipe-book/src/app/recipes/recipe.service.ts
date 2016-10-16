import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
  private recipes : Recipe [] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',[
      new Ingredient('French Fries', 2),
    new Ingredient('Lamb Meat Fries', 1)]),
    new Recipe('Summer Salad', 'Okayish', 'http://sugarmamacooks.com/wp-content/uploads/2014/07/Mexican-summer-salad-with-cilantro-lime-dressing-2_small.jpg', null)
  ];
  constructor() { }

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }

}
