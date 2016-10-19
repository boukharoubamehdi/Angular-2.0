import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";
import {Recipe} from "../recipe";
import {FormArray, FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  recipeForm: FormGroup;
  private recipeIndex: number;
  private recipe: Recipe;
  private isNew = true;
  private subscription : Subscription;

  constructor( private route: ActivatedRoute,
               private recipeService: RecipeService,
               private formBuilder: FormBuilder,
               private router: Router) { }

  ngOnInit() {
    //i want to know if i'm adding or editing
    //if i'm editing i'll have : http://localhost:4200/recipes/0
    //but if i'm adding a new recipe : http://localhost:4200/recipes/new
    // as you can see i dont have in id (i will need it later on for my for init)
    // let isNew = true;
    this.subscription = this.route.params.subscribe(
      (params : any) => {
        if (params.hasOwnProperty('id')){ //it means i have an id (which it means i'm editing)
          this.isNew = false; //i dont have a new recipe so i put it to false.
          this.recipeIndex = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
        }else{
          this.isNew = true;
          this.recipe = null;
        }
        this.initForm();
      }

  );

  }

  onSubmit(){
    const newRecipe = this.recipeForm.value;
    if(this.isNew){
      this.recipeService.addRecipe(newRecipe);
    }else {
      this.recipeService.editRecipe(this.recipe, newRecipe);
    }
    this.navigateBack();
  }


  private navigateBack(){
  this.router.navigate(['../']);
  }

  onCancel(){
    this.navigateBack();
  }

  onAddItem(name: string, amount: string){
    (<FormArray>this.recipeForm.controls['ingredients']).push(
      new FormGroup({
        name: new FormControl(name, Validators.required),
        amount: new FormControl(amount, [
          Validators.required,
          Validators.pattern("\\d+") //it means that the amount should be a digit.
        ])
      })
    );
  }

  onRemoveItem(index: number){
    //remove a fromGroup from my recipeForm and there remove the ingredient from the recipe.
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  //it will indicate if i am creating an empty form or if i already do have a recipe which i want to use.
  private initForm(){
    let recipeName = '';
    let recipeImage ='';
    let recipeContent = '';
    let recipeIngredient: FormArray = new FormArray([]);

    if(!this.isNew){ //which means we are in Editing mode
      for (let i = 0; i< this.recipe.ingredients.length;i++){
        recipeIngredient.push(
          new FormGroup({
            name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
            amount: new FormControl(this.recipe.ingredients[i].amount, [
              Validators.required,
              Validators.pattern("\\d+") //it means that the amount should be a digit.
            ])
          })
        );
      }
        //i want to see these details when i'm on edit mode.
        recipeName = this.recipe.name;
        recipeImage = this.recipe.imagePath;
        recipeContent = this.recipe.description;


    }
    //here i'm creating my Form (the formControlName are (name, imagePath, description, ingredients).
    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImage, Validators.required],
      description: [recipeContent, Validators.required],
      ingredients : recipeIngredient // recipeIngredient is a FormArray

    });
  }


}
