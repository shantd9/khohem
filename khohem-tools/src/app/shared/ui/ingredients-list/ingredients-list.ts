import {Component, computed, inject, input} from '@angular/core';
import {Ingredient} from '../../interfaces/recipe';
import {IngredientNames} from '../../interfaces/ingredient';
import {UnitNames} from '../../interfaces/unit';
import {ColorTemplateService} from '../../data-access/color-template.service';
import {NgStyle} from '@angular/common';

interface VmIngredient {
  name: string;      // The localized name
  quantity: string;
  unit: string;
}

@Component({
  selector: 'app-ingredients-list',
  imports: [
    NgStyle
  ],
  templateUrl: './ingredients-list.html',
  styleUrl: './ingredients-list.scss'
})
export class IngredientsList {
  ingredients = input.required<Ingredient[]>();
  language = input.required<'en' | 'hy'>();
  colorTemplateService = inject(ColorTemplateService);

  vm = computed<VmIngredient[]>(() => {
    const items = this.ingredients();
    const lang = this.language();

    if (!items || items.length === 0) {
      return [];
    }

    const localizedItems: VmIngredient[] = items.map(item => {
      const ingredientTranslationMap = IngredientNames[item.ingredient];
      const unitTranslationMap = UnitNames[item.unit];
      const localizedName = ingredientTranslationMap[lang];
      const localizedUnit =  unitTranslationMap[lang]
      return {
        name: localizedName,
        quantity: item.quantity,
        unit: localizedUnit
      };
    });

    return localizedItems;
  });
}
