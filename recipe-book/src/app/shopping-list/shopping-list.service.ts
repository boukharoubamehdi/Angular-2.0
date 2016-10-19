import { Ingredient } from "../shared/ingredient";

export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() { }

  getItems(){
    return this.items;
  }

  addItems(items: Ingredient[]){
    //pushing multiple items at once in one signle code line (we could also create a for loop).
    //the normal push method wont work here so we need to:
    // use the default push method to apply it then on all the items ( the items of addItems(items: Ingredient[])
    //individualy on this.items property of the ShoppingListService (private items: Ingredient[] = [];)
    Array.prototype.push.apply(this.items,items)
  }


  addItem(item: Ingredient){
    this.items.push(item);
  }

  editItem(oldItem: Ingredient, newItem: Ingredient ){
    this.items[this.items.indexOf(oldItem)] = newItem;

  }
  deleteItem(item: Ingredient){
    this.items.splice(this.items.indexOf(item),1);
  }

}
