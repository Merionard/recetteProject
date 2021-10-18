import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('test recipe','this is a test','https://images-na.ssl-images-amazon.com/images/I/81-Wxum3-IL.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addRecipe(){

  }

}
