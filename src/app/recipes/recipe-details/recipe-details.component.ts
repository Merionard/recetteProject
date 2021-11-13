import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe!: Recipe;
  id!: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const r = this.recipeService.getRecipeById(+this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    if (r != undefined) {
      this.recipe = r;
    }
    this.route.params.subscribe(p => {
      const r = this.recipeService.getRecipeById(+p['id']);
      if (r != undefined) {
        this.recipe = r;
      }

    });
  }

  onClickToShoppingList() {
    this.recipeService.addIngredientFromRecipeToShoppingList(this.recipe);
  }


  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
