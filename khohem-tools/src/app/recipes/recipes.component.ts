import {Component, inject, OnInit, signal} from '@angular/core';
import {ActionButtonsWrapper} from '../shared/ui/action-buttons-wrapper/action-buttons-wrapper';
import {RecipeImageDisplayer} from '../shared/ui/recipe-image-displayer/recipe-image-displayer';
import {RecipeSectionsDisplayer} from '../shared/ui/recipe-sections-displayer/recipe-sections-displayer';
import {RecipeTitle} from '../shared/ui/recipe-title/recipe-title';
import {Recipe} from '../shared/interfaces/recipe';
import {LanguageService} from '../shared/data-access/language.service';
import {ColorTemplateService} from '../shared/data-access/color-template.service';
import {beefSpaghetti} from '../shared/database';
import {NgStyle} from '@angular/common';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  imports: [
    ActionButtonsWrapper,
    RecipeImageDisplayer,
    RecipeSectionsDisplayer,
    RecipeTitle,
    NgStyle
  ],
  styleUrls: ['./recipes.component.scss'],
})
export default class RecipesComponent implements OnInit {
  recipe = signal<Recipe | null>(null);
  languageService = inject(LanguageService)
  colorTemplateService = inject(ColorTemplateService)

  ngOnInit() {
    this.recipe.update(() => beefSpaghetti);
  }
}
