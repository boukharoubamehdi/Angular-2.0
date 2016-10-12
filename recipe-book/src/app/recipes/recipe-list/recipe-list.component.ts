import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes :Recipe [] = [];
 @Output() recipeSelected = new EventEmitter<Recipe>();
 recipe = new Recipe('Dummy','Dummy','http://thumbs.ebaystatic.com/images/m/mfXELL6zPWJE4OC0agiXMZw/s-l225.jpg');

  constructor() { }

  ngOnInit() {
  }

  //this method will hold the selected Recipe.
  //and i want to use that to uptade (git it to recipe-detail component) the recipe-detail.
  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
