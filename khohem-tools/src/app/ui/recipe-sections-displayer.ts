import {Component, inject, input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {IngredientsList} from './ingredients-list/ingredients-list';
import {Recipe, RecipeSection} from '../shared/interfaces/recipe';
import {LanguageService} from '../shared/data-access/language.service';

@Component({
  selector: 'app-recipe-sections-displayer',
  imports: [CommonModule, IngredientsList],
  templateUrl: './recipe-sections-displayer.html',
  styleUrls: ['./recipe-sections-displayer.scss']
})
export class RecipeSectionsDisplayer {
  recipeSections = input.required<RecipeSection[]>()
  languageService = inject(LanguageService);
}
