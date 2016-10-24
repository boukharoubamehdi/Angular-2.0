import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {RecipesComponent} from "./recipes.component";
import {RecipeStartComponent} from "./recipe-start.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {recipesRouting} from "./recipes.routing";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({

  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent
  ],
  imports: [
    SharedModule, //it's an example of a sharedModule (contains CommonModule).
    ReactiveFormsModule,
    recipesRouting
  ]

})

export class RecipesModule{

}
