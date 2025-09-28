import {Component, computed, input} from '@angular/core';
import {Ingredient} from '../../shared/interfaces/recipe';
import {IngredientNames} from '../../shared/interfaces/ingredient';

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
      const translationMap = IngredientNames[item.ingredient];

      const localizedName = translationMap[lang];

      return {
        name: localizedName,
        quantity: item.quantity,
        unit: item.unit
      };
    });

    return localizedItems;
  });
}
