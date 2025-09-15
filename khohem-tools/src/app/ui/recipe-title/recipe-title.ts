import {Component, input} from '@angular/core';

@Component({
  selector: 'app-recipe-title',
  imports: [],
  templateUrl: './recipe-title.html',
  styleUrl: './recipe-title.scss'
})
export class RecipeTitle {
  recipeTitle = input.required<string>();
}
