import {Component, computed, input} from '@angular/core';
import {Ingredient} from '../../shared/interfaces/recipe';
import {IngredientNames} from '../../shared/interfaces/ingredient';
import {UnitNames} from '../../shared/interfaces/unit';

interface VmIngredient {
  name: string;      // The localized name
  quantity: string;
  unit: string;
}

@Component({
  selector: 'app-ingredients-list',
  imports: [],
  templateUrl: './ingredients-list.html',
  styleUrl: './ingredients-list.scss'
})
export class IngredientsList {
  ingredients = input.required<Ingredient[]>();
  language = input.required<'en' | 'hy'>();

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
