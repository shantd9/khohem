import {Component, inject, input} from '@angular/core';
import {ColorTemplateService} from '../../data-access/color-template.service';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-recipe-title',
  imports: [
    NgStyle
  ],
  templateUrl: './recipe-title.html',
  styleUrl: './recipe-title.scss'
})
export class RecipeTitle {
  recipeTitle = input.required<string>();
  colorTemplateService = inject(ColorTemplateService)
}
