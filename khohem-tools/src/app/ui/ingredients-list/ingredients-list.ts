import {Component, input, Input} from '@angular/core';
import {Ingredient} from '../../shared/interfaces/recipe';

@Component({
  selector: 'app-ingredients-list',
  imports: [],
  templateUrl: './ingredients-list.html',
  styleUrl: './ingredients-list.scss'
})
export class IngredientsList {
  ingredients = input.required<Ingredient[]>();
}
