import {Component, inject, OnInit, signal} from '@angular/core';
import {ActionButtonsWrapper} from '../shared/ui/action-buttons-wrapper/action-buttons-wrapper';
import {Recipe} from '../shared/interfaces/recipe';
import {ColorTemplateService} from '../shared/data-access/color-template.service';
import {RecipeDisplayerComponent} from '../shared/ui/recipe-displayer/recipe-displayer.component';
import {meatAndFatte} from '../shared/database/meatAndFatte';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  imports: [
    ActionButtonsWrapper,
    RecipeDisplayerComponent
  ],
  styleUrls: ['./recipes.component.scss'],
})
export default class RecipesComponent implements OnInit {
  recipe = signal<Recipe | null>(null);
  colorTemplateService = inject(ColorTemplateService)

  ngOnInit() {
    this.recipe.update(() => meatAndFatte);
  }
}
