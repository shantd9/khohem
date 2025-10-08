import {Recipe} from '../interfaces/recipe';
import {UnitKey} from '../interfaces/unit';
import {IngredientKey} from '../interfaces/ingredient';

export const ttoum: Recipe =  {
  title: "Zucchini & Meat",
  titleHy: "Միսով Դդում",
  sections: [
    {
      sectionTitle: 'zucchini',
      sectionTitleHy: 'դդում',
      ingredients: [
        { quantity: "1", unit: UnitKey.Kilogram, ingredient: IngredientKey.Zucchini },
        { quantity: "1", unit: UnitKey.Tablespoon, ingredient: IngredientKey.PepperPaste },
        { quantity: "2", unit: UnitKey.Tablespoon, ingredient: IngredientKey.TomatoPaste },
        { quantity: "¼", unit: UnitKey.Teaspoon, ingredient: IngredientKey.BlackPepper },
        { quantity: "¼", unit: UnitKey.Teaspoon, ingredient: IngredientKey.RedPepper },
        { quantity: "1", unit: UnitKey.Teaspoon, ingredient: IngredientKey.Salt },
      ]
    },
    {
      sectionTitle: 'meat',
      sectionTitleHy: 'միս',
      ingredients: [
        { quantity: "200", unit: UnitKey.Gram, ingredient: IngredientKey.GroundBeef },
        { quantity: "20", unit: UnitKey.Gram, ingredient: IngredientKey.Butter },
        { quantity: "½", unit: UnitKey.Cup, ingredient: IngredientKey.Onion },
        { quantity: "¼", unit: UnitKey.Teaspoon, ingredient: IngredientKey.BlackPepper },
        { quantity: "¼", unit: UnitKey.Teaspoon, ingredient: IngredientKey.RedPepper },
        { quantity: "¼", unit: UnitKey.Teaspoon, ingredient: IngredientKey.SevenSpices },
        { quantity: "½", unit: UnitKey.Teaspoon, ingredient: IngredientKey.Salt },
      ]
    }
  ]
};
