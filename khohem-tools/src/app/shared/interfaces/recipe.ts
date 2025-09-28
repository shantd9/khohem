import {UnitKey} from './unit';
import {IngredientKey} from './ingredient';

export interface Recipe {
  title: string;
  titleHy: string
  sections: RecipeSection[]
}

export interface RecipeSection {
  sectionTitle: string;
  sectionTitleHy: string
  ingredients: Ingredient[]
}

export interface Ingredient {
  unit: UnitKey;        // reference to enum
  ingredient: IngredientKey;
  quantity: string
}
