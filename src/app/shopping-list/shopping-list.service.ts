import {Ingredient} from "../shared/ingredient.model";
import {Recipe} from "../recipes/recipe.model";
import {Subject} from "rxjs";

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("banane", 2)
  ];
  ingredientEmitter = new Subject<Ingredient[]>();
  shoppingIngredientSubject = new Subject<number>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientEmitter.next(this.ingredients.slice());
  }

  addIngredientFromRecipe(recipe: Recipe) {
    recipe.ingredients.forEach(i => this.ingredients.push(i));
    //this.ingredients.push(...recipe.ingredients);
    this.ingredientEmitter.next(this.ingredients.slice());
  }

  getIngredientByIndex(i: number): Ingredient {
    return this.ingredients[i];
  }

  updateIngredient(index:number, newIngredient:Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientEmitter.next(this.ingredients);
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index,1);
    this.ingredientEmitter.next(this.ingredients);
  }

}
