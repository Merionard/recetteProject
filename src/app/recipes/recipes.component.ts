import {Component, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeItem!: Recipe;

  constructor(private recipeService : RecipeService) {
  }

  ngOnInit(): void {
    this.recipeService.eventRecipe.subscribe(recipeSelected=>this.recipeItem = recipeSelected);
  }

}
