import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() addedIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  // onAddIngredient(nameInput,amountInput ) {
  //   const ingredient: Ingredient = new Ingredient(nameInput.value, amountInput.value);
  //   this.addedIngredient.emit(ingredient);
  //   nameInput.value = '';
  //   amountInput.value = '';
  //   nameInput.focus();
  // }


  onAddIngredient() {
    const nameInput = this.nameInputRef.nativeElement;
    const amountInput = this.amountInputRef.nativeElement;

    const ingredient: Ingredient = new Ingredient(nameInput.value, amountInput.value);
    this.addedIngredient.emit(ingredient);
    nameInput.value = '';
    amountInput.value = '';
    nameInput.focus();
  }
}

