import {Routes, RouterModule} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RECIPE_ROUTES} from "./recipes/recipes.routes";

const APP_ROUTES: Routes = [
  //we added pathMatch: 'full' to make sure we are not redirecting all the time but only if the path is empty and not empty
  //and something else.
  { path:'', redirectTo: '/recipes', pathMatch: 'full'},
  { path:'recipes', component: RecipesComponent, children:RECIPE_ROUTES},
  { path:'shopping-list', component: ShoppingListComponent },

];

export const routing = RouterModule.forRoot(APP_ROUTES);
