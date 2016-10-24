import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { RecipeService } from './recipes/recipe.service';
import { routing } from './app.routing';
import {CoreModule} from "./core.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    CoreModule
    //i lazy load ShoppingListModule and RecipeModule too.
  ],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
