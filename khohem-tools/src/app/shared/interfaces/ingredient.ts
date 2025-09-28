import {UnitKey} from './unit';

export enum IngredientKey {
  Flour = 'flour',
  PowderedSugar = 'powdered_sugar',
  Oil = 'oil',
  BakingPowder = 'baking_powder',
  EggYolk = 'egg_yolk',
  Butter = 'butter',
  VanillaPowder = 'vanilla_powder',
  Milk = 'milk',
  Egg = 'egg',
  Sugar = 'sugar',
  StrawberryJelly = 'strawberry_jelly',
  HotWater = 'hot_water',
  ApricotJam = 'apricot_jam',
}

export const IngredientNames: Record<IngredientKey, { en: string; hy: string }> = {
  [IngredientKey.Flour]: { en: 'flour', hy: 'ալիւր' },
  [IngredientKey.PowderedSugar]: { en: 'powdered sugar', hy: 'փոշի շաքար' },
  [IngredientKey.Oil]: { en: 'oil', hy: 'ձէթ' },
  [IngredientKey.BakingPowder]: { en: 'baking powder', hy: 'պէյքինկ փաուտըր' },
  [IngredientKey.EggYolk]: { en: 'egg yolk', hy: 'հաւկիթի դեղնուց' },
  [IngredientKey.Butter]: { en: 'butter', hy: 'կարագ' },
  [IngredientKey.VanillaPowder]: { en: 'vanilla powder', hy: 'փոշի վանիլ' },
  [IngredientKey.Milk]: { en: 'milk', hy: 'կաթ' },
  [IngredientKey.Egg]: { en: 'egg', hy: 'հաւկիթ' },
  [IngredientKey.Sugar]: { en: 'sugar', hy: 'շաքար' },
  [IngredientKey.StrawberryJelly]: { en: 'strawberry jelly', hy: 'ելակի ճելօ' },
  [IngredientKey.HotWater]: { en: 'hot water', hy: 'տաք ջուր' },
  [IngredientKey.ApricotJam]: { en: 'apricot jam', hy: 'ծիրանի անուշ' },
};
