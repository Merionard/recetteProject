import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('test recipe',
      'this is a test',
      'https://images-na.ssl-images-amazon.com/images/I/81-Wxum3-IL.jpg',
      [
        new Ingredient('pomme', 1),
        new Ingredient('riz', 3)
      ]),
    new Recipe('Oeuf au plat',
      'juste 2 oeufs',
      'https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/elle-a-table/les-dossiers-de-la-redaction/dossier-de-la-redac/comment-preparer-un-oeuf-au-plat/90562366-1-fre-FR/20-recettes-d-oeufs-au-plat-a-avoir-goute-au-moins-une-fois-dans-sa-vie.jpg',
      [
        new Ingredient('banane', 1),
        new Ingredient('patate', 5)
      ])
  ];
  eventRecipe: Subject<Recipe> = new Subject<Recipe>();
  recipesSubject: Subject<Recipe[]> = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }


  addIngredientFromRecipeToShoppingList(recipe: Recipe | undefined) {
    if (recipe != undefined) {
      this.shoppingListService.addIngredientFromRecipe(recipe);
    }
  }

  getRecipeById(id: number): Recipe {
    return <Recipe>this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
    this.recipesSubject.next(this.recipes.slice());
    console.log('recipe dans service:' + this.recipes);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesSubject.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipesSubject.next(this.recipes.slice());
  }

}
