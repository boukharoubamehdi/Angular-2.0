import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [null];
  selectedItem: Ingredient = null;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.items = this.shoppingListService.getItems();
  }

  //i will be able to select an item in my list and i'm binding it to the selectedItem property so i can pass
  //this property through event biding to my shopping list (<rb-shopping-list-add></rb-shopping-list-add>)
  //i want to pass the curent select item to the rb-shopping-list-add component
  onSelectItem(item: Ingredient){
  this.selectedItem = item;

  }

}
