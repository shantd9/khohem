import {Recipe} from '../interfaces/recipe';
import { UnitKey } from '../interfaces/unit';
import {IngredientKey} from '../interfaces/ingredient';

export const sfouf: Recipe = {
  title: 'Sfouf',
  titleHy: 'Սֆուֆ',
  recipeImageUrl: 'assets/images/recipes/sfouf.jpg',
  sections: [
    {
      ingredients: [
        {
          unit: UnitKey.Gram,
          ingredient: IngredientKey.Flour,
          quantity: '120'
        },
        {
          unit: UnitKey.Gram,
          ingredient: IngredientKey.FineSemolina,
          quantity: '150'
        },
        {
          unit: UnitKey.Gram,
          ingredient: IngredientKey.Sugar,
          quantity: '200'
        },
        {
          unit: UnitKey.Milliliter,
          ingredient: IngredientKey.SunflowerOil,
          quantity: '60'
        },
        {
          unit: UnitKey.Milliliter,
          ingredient: IngredientKey.Milk,
          quantity: '250'
        },
        {
          unit: UnitKey.Tablespoon,
          ingredient: IngredientKey.Yogurt,
          quantity: '2'
        },
        {
          unit: UnitKey.Tablespoon,
          ingredient: IngredientKey.BakingPowder,
          quantity: '½'
        },
        {
          unit: UnitKey.Tablespoon,
          ingredient: IngredientKey.Turmeric,
          quantity: '½'
        },
        {
          unit: UnitKey.Teaspoon,
          ingredient: IngredientKey.Anise,
          quantity: '½'
        },
        {
          unit: UnitKey.Teaspoon,
          ingredient: IngredientKey.Salt,
          quantity: '¼'
        },
      ]
    }
  ]
};
