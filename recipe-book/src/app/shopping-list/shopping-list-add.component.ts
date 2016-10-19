import {Component, Input, OnChanges, EventEmitter, Output} from '@angular/core';
import {Ingredient} from "../shared/ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnChanges {
  @Input() item: Ingredient;
  @Output() cleared = new EventEmitter();
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
      //it means that name and amount will always be accessible.
      this.item = {name:null , amount: null};
    }else {
      this.isAdd = false;
    }
  }

  //we took ingredient type because the value (of the form) contains name and value
  // same thing in Ingredient Class : constructor(public name: string, public amount: number)
  onSubmit(ingredient: Ingredient) {
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);

    if(!this.isAdd){
     this.shoppingListService.editItem(this.item, newIngredient);
     this.onClear();
    }else {
      this.item = newIngredient;
      this.shoppingListService.addItem(this.item)
    }
  }

onDelete(){
  this.shoppingListService.deleteItem(this.item);
  this.onClear();
}

  onClear(){
    this.isAdd = true;
    this.cleared.emit(null);

  }





}
