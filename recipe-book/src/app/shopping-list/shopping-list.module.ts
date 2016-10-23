import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingListAddComponent } from "./shopping-list-add.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({

  declarations: [
    ShoppingListComponent,
    ShoppingListAddComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]

})

export class ShoppingListModule{

}
