import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  private recipes :Recipe [] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',null),
    new Recipe('Summer Salad', 'Okayish', 'http://sugarmamacooks.com/wp-content/uploads/2014/07/Mexican-summer-salad-with-cilantro-lime-dressing-2_small.jpg', null)
  ];
  constructor() { }

  getRecipes(){
    return this.recipes;
  }
}
