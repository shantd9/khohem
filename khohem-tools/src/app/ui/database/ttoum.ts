import {Recipe} from '../../shared/interfaces/recipe';
import {UnitKey} from '../../shared/interfaces/unit';
import {IngredientKey} from '../../shared/interfaces/ingredient';

export const ttoum: Recipe =  {
  title: "Zucchini & Meat",
  titleHy: "Դդում",
  sections: [
    {
      sectionTitle: 'Zucchini',
      sectionTitleHy: 'Դդում',
      ingredients: [
        { quantity: "1 ½", unit: UnitKey.Kilogram, ingredient: IngredientKey.Zucchini },
        { quantity: "1", unit: UnitKey.Tablespoon, ingredient: IngredientKey.PepperPaste },
        { quantity: "2", unit: UnitKey.Tablespoon, ingredient: IngredientKey.TomatoPaste },
        { quantity: "1/4", unit: UnitKey.Teaspoon, ingredient: IngredientKey.BlackPepper },
        { quantity: "1/4", unit: UnitKey.Teaspoon, ingredient: IngredientKey.RedPepper },
        { quantity: "1", unit: UnitKey.Teaspoon, ingredient: IngredientKey.Salt },
      ]
    },
    {
      sectionTitle: 'Meat',
      sectionTitleHy: 'Միս',
      ingredients: [
        { quantity: "200", unit: UnitKey.Gram, ingredient: IngredientKey.GroundBeef },
        { quantity: "20", unit: UnitKey.Gram, ingredient: IngredientKey.Butter },
        { quantity: "1/2", unit: UnitKey.Cup, ingredient: IngredientKey.Onion },
        { quantity: "1/4", unit: UnitKey.Teaspoon, ingredient: IngredientKey.BlackPepper },
        { quantity: "1/4", unit: UnitKey.Teaspoon, ingredient: IngredientKey.RedPepper },
        { quantity: "1/4", unit: UnitKey.Teaspoon, ingredient: IngredientKey.SevenSpices },
        { quantity: "1/2", unit: UnitKey.Teaspoon, ingredient: IngredientKey.Salt },
      ]
    }
  ]
};
