import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients : Ingredient[]= [];
  sub!: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.sub = this.shoppingListService.ingredientEmitter.subscribe(ingredients=>this.ingredients=ingredients);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onEditItem(i:  number) {
  this.shoppingListService.shoppingIngredientSubject.next(i);
  }
}
