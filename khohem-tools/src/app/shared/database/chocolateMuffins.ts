import {Recipe} from '../interfaces/recipe';
import {UnitKey} from '../interfaces/unit';
import {IngredientKey} from '../interfaces/ingredient';

export const chocolateMuffins: Recipe = {
  title: "Chocolate Muffins",
  titleHy: "Տուրմով Մաֆին",
  recipeImageUrl: "chocolateMuffin.jpeg",
  sections: [
    {
      sectionTitle: '1',
      sectionTitleHy: '1',
      ingredients: [
        {quantity: "250", unit: UnitKey.Gram, ingredient: IngredientKey.Flour},
        {quantity: "120", unit: UnitKey.Gram, ingredient: IngredientKey.CocoaPowder},
        {quantity: "1", unit: UnitKey.Teaspoon, ingredient: IngredientKey.BakingPowder},
        {quantity: "½", unit: UnitKey.Teaspoon, ingredient: IngredientKey.BakingSoda},
        {quantity: "½", unit: UnitKey.Teaspoon, ingredient: IngredientKey.Salt},
      ]
    },
    {
      sectionTitle: '2',
      sectionTitleHy: '2',
      ingredients: [
        {quantity: "3", unit: UnitKey.Times, ingredient: IngredientKey.Egg},
        {quantity: "250", unit: UnitKey.Gram, ingredient: IngredientKey.Sugar},
      ]
    },
    {
      sectionTitle: '3',
      sectionTitleHy: '3',
      ingredients: [
        {quantity: "100", unit: UnitKey.Gram, ingredient: IngredientKey.Oil},
        {quantity: "340", unit: UnitKey.Gram, ingredient: IngredientKey.Yogurt},
        {quantity: "1", unit: UnitKey.Teaspoon, ingredient: IngredientKey.Vanilla},
      ]
    }
  ]
};
