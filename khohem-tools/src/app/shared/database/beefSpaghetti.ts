import {Recipe} from '../interfaces/recipe';
import {UnitKey} from '../interfaces/unit';
import {IngredientKey} from '../interfaces/ingredient';

export const beefSpaghetti: Recipe = {
  title: "Beef Spaghetti",
  titleHy: "Միսով Մագարոն",
  recipeImageUrl: "beefSpaghetti.png",
  sections: [
    {
      ingredients: [
        {quantity: "½", unit: UnitKey.Kilogram, ingredient: IngredientKey.N5Spaghetti},
        {quantity: "½", unit: UnitKey.Kilogram, ingredient: IngredientKey.BiftekMeat},
        {quantity: "1", unit: UnitKey.Teaspoon, ingredient: IngredientKey.RedPepper},
        {quantity: "1", unit: UnitKey.Teaspoon, ingredient: IngredientKey.BlackPepper},
        {quantity: "1", unit: UnitKey.Tablespoon, ingredient: IngredientKey.Salt},
        {quantity: "4", unit: UnitKey.Tablespoon, ingredient: IngredientKey.TomatoPaste},
        {quantity: "2", unit: UnitKey.Tablespoon, ingredient: IngredientKey.PepperPaste},
        {quantity: "4", unit: UnitKey.Tablespoon, ingredient: IngredientKey.Oil},
        {quantity: "8", unit: UnitKey.Clove, ingredient: IngredientKey.Garlic},
      ]
    },
  ]
};
