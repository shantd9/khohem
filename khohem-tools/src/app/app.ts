import {Component, inject, OnInit, signal} from '@angular/core';
import {RecipeImageDisplayer} from './ui/recipe-image-displayer/recipe-image-displayer';
import {RecipeTitle} from './ui/recipe-title/recipe-title';
import {Recipe} from './shared/interfaces/recipe';
import {ttoum} from './shared/database/ttoum';
import {ActionButtonsWrapper} from './ui/action-buttons-wrapper/action-buttons-wrapper';
import {LanguageService} from './shared/data-access/language.service';
import {RecipeSectionsDisplayer} from './ui/recipe-sections-displayer/recipe-sections-displayer';
import {NgStyle} from '@angular/common';
import {ColorTemplateService} from './shared/data-access/color-template.service';
import {honeySrirachaChicken} from './shared/database';

@Component({
  selector: 'app-root',
  imports: [
    RecipeImageDisplayer,
    RecipeTitle,
    ActionButtonsWrapper,
    RecipeSectionsDisplayer,
    NgStyle
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  recipe = signal<Recipe | null>(null);
  languageService = inject(LanguageService)
  colorTemplateService = inject(ColorTemplateService)

  ngOnInit() {
    this.recipe.update(() => honeySrirachaChicken);
  }
}
