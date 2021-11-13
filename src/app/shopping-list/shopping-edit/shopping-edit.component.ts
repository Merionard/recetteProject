import {Component, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('f')
  form!: NgForm;
  editedIngredient: Ingredient | undefined;
  index: number = 0;
  editMode = false;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.shoppingListService.shoppingIngredientSubject.subscribe(index => {
        this.editedIngredient = this.shoppingListService.getIngredientByIndex(index);
        this.editMode = true;
        this.index = index;
        this.form.setValue({name:this.editedIngredient.name,
        amount:this.editedIngredient.amount})
      }
    );
  }


  onSubmit(form: NgForm) {
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.index,newIngredient);
    }else{
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();

  }

  onClear() {
    this.form.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.index);
    this.onClear();
  }
}
