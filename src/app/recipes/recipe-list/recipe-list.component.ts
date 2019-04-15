import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Crispy Fried Chicken', 'description of recipe', 'https://dish-environment-prod-contentbucket-10u8bszryovz3.s3.amazonaws.com/assets/s3fs-public/styles/content_image_x_large/public/101923934_Fried-Chicken-in-yellow-pan-with-cornbread-1.jpg?itok=2bLvCDuk'),
    new Recipe('Mexican-Style Shrimp Cocktail', 'description of recipe 2', 'https://images.media-allrecipes.com/userphotos/720x405/4064627.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onSelectedRecipe(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
