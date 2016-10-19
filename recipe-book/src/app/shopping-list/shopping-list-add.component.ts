import {Component, Input, OnChanges} from '@angular/core';
import {Ingredient} from "../shared/ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnChanges {
  @Input() item: Ingredient;
  isAdd = true;

  constructor(private shoppingListService: ShoppingListService) { }

  //whenever my @Input() item: Ingredient; changes so whenever the user select a new item in the list, whenever
  //the  selectedItem: Ingredient = null; from ShoppingListComponent changes.

  //changes is just an object passed by Angular 2 which hold all the items all the properties which can be changed from
  // outside (for example : @Input() item: Ingredient;)
  //we choose the Onchanges because every time i select an item i want to listen to this change and therefore change
  // my addmode (true, false).
  ngOnChanges(changes) {
    if(changes.item.currentValue === null){
      this.isAdd = true;
    }else {
      this.isAdd = false;
    }
  }

  //we took ingredient type because the value (of the form) contains name and value
  // same thing in Ingredient Class : constructor(public name: string, public amount: number)
  onSubmit(ingredient: Ingredient) {
    if(!this.isAdd){
    //edit
    }else {
      this.item = new Ingredient(ingredient.name, ingredient.amount);
      this.shoppingListService.addItem(this.item)
    }
  }
}
