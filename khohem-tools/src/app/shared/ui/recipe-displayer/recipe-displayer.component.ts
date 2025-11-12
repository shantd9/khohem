import {Component, inject, input, Input} from '@angular/core';
import {Recipe} from '../../interfaces/recipe';
import {RecipeImageDisplayer} from '../recipe-image-displayer/recipe-image-displayer';
import {RecipeSectionsDisplayer} from '../recipe-sections-displayer/recipe-sections-displayer';
import {RecipeTitle} from '../recipe-title/recipe-title';
import {NgStyle} from '@angular/common';
import {ColorTemplateService} from '../../data-access/color-template.service';

@Component({
  selector: 'app-recipe-displayer',
  imports: [
    RecipeImageDisplayer,
    RecipeSectionsDisplayer,
    RecipeTitle,
    NgStyle
  ],
  templateUrl: './recipe-displayer.component.html',
  styleUrl: './recipe-displayer.component.scss'
})
export class RecipeDisplayerComponent {
  recipe = input<Recipe | null>(null);
  language = input.required<"en" | "hy">();

  colorTemplateService = inject(ColorTemplateService);
}
