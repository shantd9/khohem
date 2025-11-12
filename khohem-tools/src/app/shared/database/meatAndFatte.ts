import {Recipe} from '../interfaces/recipe';
import {UnitKey} from '../interfaces/unit';
import {IngredientKey} from '../interfaces/ingredient';

export const meatAndFatte: Recipe = {
  title: "Fatteh with Meat",
  titleHy: "Միսով Ֆաթթէ",
  recipeImageUrl: "meatAndFatte.jpeg",
  sections: [
    {
      sectionTitle: "Meat",
      sectionTitleHy: "Միս",
      ingredients: [
        {quantity: "250", unit: UnitKey.Gram, ingredient: IngredientKey.GroundBeef},
        {quantity: "½", unit: UnitKey.Teaspoon, ingredient: IngredientKey.SevenSpices},
        {quantity: "½", unit: UnitKey.Teaspoon, ingredient: IngredientKey.BlackPepper},
        {quantity: "¼", unit: UnitKey.Teaspoon, ingredient: IngredientKey.Cinnamon},
        {quantity: "", unit: UnitKey[""], ingredient: IngredientKey.Salt},
      ]
    },
    {
      sectionTitle: "Fatteh",
      sectionTitleHy: "Ֆաթթէ",
      ingredients: [
        {quantity: "1", unit: UnitKey.Kilogram, ingredient: IngredientKey.Yogurt},
        {quantity: "1", unit: UnitKey.Clove, ingredient: IngredientKey.Garlic},
        {quantity: "2", unit: UnitKey.Tablespoon, ingredient: IngredientKey.TahiniPaste},
        {quantity: "400", unit: UnitKey.Gram, ingredient: IngredientKey.Chickpeas},
        {quantity: "", unit: UnitKey[""], ingredient: IngredientKey.Salt},
      ]
    },
  ]
};
