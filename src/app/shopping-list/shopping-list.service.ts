import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient("Apples",5),
    new Ingredient("banane",2)
  ];
  ingredientEmitter = new EventEmitter<Ingredient[]>();

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientEmitter.emit(this.ingredients);
  }

}
