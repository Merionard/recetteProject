import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('test recipe',
      'this is a test',
      'https://images-na.ssl-images-amazon.com/images/I/81-Wxum3-IL.jpg',
      [
        new Ingredient('pomme',1),
        new Ingredient('riz',3)
      ]),
    new Recipe('Oeuf au plat',
      'juste 2 oeufs',
      'https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/elle-a-table/les-dossiers-de-la-redaction/dossier-de-la-redac/comment-preparer-un-oeuf-au-plat/90562366-1-fre-FR/20-recettes-d-oeufs-au-plat-a-avoir-goute-au-moins-une-fois-dans-sa-vie.jpg',
      [
        new Ingredient('banane',1),
        new Ingredient('patate',5)
      ])
  ];
  eventRecipeEmiter: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  getRecipes(){
    return this.recipes.slice();
  }
  emitRecipeItem(recipe:Recipe){
    this.eventRecipeEmiter.emit(recipe);
  }
}
