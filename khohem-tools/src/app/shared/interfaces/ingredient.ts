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
  [IngredientKey.Flour]: { en: 'Flour', hy: 'ալիւր' },
  [IngredientKey.PowderedSugar]: { en: 'Powdered sugar', hy: 'փոշի շաքար' },
  [IngredientKey.Oil]: { en: 'Oil', hy: 'ձէթ' },
  [IngredientKey.BakingPowder]: { en: 'Baking powder', hy: 'պէյքինկ փաուտըր' },
  [IngredientKey.EggYolk]: { en: 'Egg yolk', hy: 'հաւկիթի դեղնուց' },
  [IngredientKey.Butter]: { en: 'Butter', hy: 'կարագ' },
  [IngredientKey.VanillaPowder]: { en: 'Vanilla powder', hy: 'փոշի վանիլ' },
  [IngredientKey.Milk]: { en: 'milk', hy: 'կաթ' },
  [IngredientKey.Egg]: { en: 'egg', hy: 'հաւկիթ' },
  [IngredientKey.Sugar]: { en: 'sugar', hy: 'շաքար' },
  [IngredientKey.StrawberryJelly]: { en: 'Strawberry jelly', hy: 'ելակի ճելօ' },
  [IngredientKey.HotWater]: { en: 'Hot water', hy: 'տաք ջուր' },
  [IngredientKey.ApricotJam]: { en: 'Apricot jam', hy: 'ծիրանի անուշ' },
};
