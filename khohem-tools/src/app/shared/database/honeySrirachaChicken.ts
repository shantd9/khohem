import {Recipe} from '../interfaces/recipe';
import {UnitKey} from '../interfaces/unit';
import {IngredientKey} from '../interfaces/ingredient';

export const honeySrirachaChicken: Recipe =  {
  title: "Honey Sriracha Chicken",
  titleHy: "Մեղրով Սրիրաչա Հաւ",
  sections: [
    {
      sectionTitle: 'sauce',
      sectionTitleHy: 'սոուս',
      ingredients: [
        { quantity: "120", unit: UnitKey.Gram, ingredient: IngredientKey.SrirachaSauce},
        { quantity: "60", unit: UnitKey.Milliliter, ingredient: IngredientKey.SoySauce},
        { quantity: "30", unit: UnitKey.Milliliter, ingredient: IngredientKey.AppleCiderVinegar},
        { quantity: "50", unit: UnitKey.Milliliter, ingredient: IngredientKey.Honey},
        { quantity: "15", unit: UnitKey.Gram, ingredient: IngredientKey.Ginger},
        { quantity: "4", unit: UnitKey.Piece, ingredient: IngredientKey.Garlic},
        { quantity: "2 & ½", unit: UnitKey.Gram, ingredient: IngredientKey.CornFlour},
        { quantity: "1.25", unit: UnitKey.Kilogram, ingredient: IngredientKey.ChickenBreast},
      ]
    },
    {
      sectionTitle: 'rice',
      sectionTitleHy: 'բրինձ',
      ingredients: [
        { quantity: "300", unit: UnitKey.Gram, ingredient: IngredientKey.JasmineRice },
        { quantity: "500", unit: UnitKey.Gram, ingredient: IngredientKey.ColdWater },
        { quantity: "2", unit: UnitKey.Teaspoon, ingredient: IngredientKey.Salt },
      ]
    },
    {
      sectionTitle: 'Broccolini',
      sectionTitleHy: 'բրոկոլինի',
      ingredients: [
        { quantity: "15", unit: UnitKey.Milliliter, ingredient: IngredientKey.PeanutOil },
        { quantity: "300", unit: UnitKey.Gram, ingredient: IngredientKey.Broccolini },
        { quantity: "2", unit: UnitKey.Tablespoon, ingredient: IngredientKey.SesameOil },
        { quantity: "2", unit: UnitKey.Tablespoon, ingredient: IngredientKey.WhitePepper },
      ]
    }
  ]
};
