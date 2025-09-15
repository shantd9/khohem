export interface Recipe {
  title: string;
  sections: RecipeSection[]
}

export interface RecipeSection {
  sectionTitle: string;
  ingredients: Ingredient[]
}

export interface Ingredient {
  unit: string;
  name: string;
}
