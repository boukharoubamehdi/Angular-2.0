import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';
import {Headers, Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class RecipeService {
  private recipes : Recipe [] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',[
      new Ingredient('French Fries', 2),
    new Ingredient('Lamb Meat Fries', 1)]),
    new Recipe('Summer Salad', 'Okayish', 'http://sugarmamacooks.com/wp-content/uploads/2014/07/Mexican-summer-salad-with-cilantro-lime-dressing-2_small.jpg',
      [
        new Ingredient('French Eggs', 4),
        new Ingredient(' cheese', 3)])
  ];
  constructor( private http: Http) { }

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

storeData(){

  const body = JSON.stringify(this.recipes);
  const headers = new Headers;

  headers.append('Content-Type', 'application/json');
  return this.http.post('https://recipebook-afd29.firebaseio.com/recipes.json', body, {
    headers: headers
  }).map((data: Response) => data.json()).catch(this.handleError);

}

fetchData(){

}

  private handleError(error : any){
    console.log(error);
    //i will return the observable, because as the map operator function return automatically the extracted
    //data  (esponse.json())
    // because the obs has to continue, no matter if an error happend or not i need to return this error.
    //so i'm able to handle it in the subscribe section as well.

    return Observable.throw(error.json()); //take the error and return it.
    //or we can transform error.json() "it will only send the error message"it depends on how we want to handle the error.

  }

}
