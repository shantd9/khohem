import {Component, inject, input, OnInit, signal} from '@angular/core';
import html2canvas from 'html2canvas';
import {RecipeImageDisplayer} from './ui/recipe-image-displayer/recipe-image-displayer';
import {IngredientsList} from './ui/ingredients-list/ingredients-list';
import {RecipeTitle} from './ui/recipe-title/recipe-title';
import {Recipe} from './shared/interfaces/recipe';
import {strawberryTart} from './ui/database';
import {ttoum} from './ui/database/ttoum';
import {ColorTemplateService} from './shared/data-access/color-template.service';
import {ActionButtonsWrapper} from './ui/action-buttons-wrapper/action-buttons-wrapper';
import {LanguageService} from './shared/data-access/language.service';
import {RecipeSectionsDisplayer} from './ui/recipe-sections-displayer';

@Component({
  selector: 'app-root',
  imports: [
    RecipeImageDisplayer,
    IngredientsList,
    RecipeTitle,
    ActionButtonsWrapper,
    RecipeSectionsDisplayer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  recipe = signal<Recipe | null>(null);
  colorTemplateService = inject(ColorTemplateService)
  languageService = inject(LanguageService)
  ngOnInit() {
    this.recipe.update(() => ttoum);
  }

}
