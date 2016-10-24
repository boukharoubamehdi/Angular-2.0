import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";


const APP_ROUTES: Routes = [
  //we added pathMatch: 'full' to make sure we are not redirecting all the time but only if the path is empty and not empty
  //and something else.

  {path:'', component: HomeComponent},
  {path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule'},
  {path: 'shopping-list', loadChildren: 'app/shopping-list/shopping-list.module#ShoppingListModule'},

];

export const routing = RouterModule.forRoot(APP_ROUTES);
