export enum UnitKey {
  // Gram = 'gram',
  Tablespoon = 'tablespoon',
  Teaspoon = 'teaspoon',
  Piece = 'piece',
  Pinch = 'pinch',
  Cup = 'cup',
}

export const UnitNames: Record<UnitKey, { en: string; hy: string }> = {
  // [UnitKey.Gram]: { en: 'g', hy: 'գ' },
  [UnitKey.Tablespoon]: { en: 'tbsp', hy: 'ս. գ' },
  [UnitKey.Teaspoon]: { en: 'tsp', hy: 'թ. դգ' },
  [UnitKey.Piece]: { en: 'piece', hy: 'հատ' },
  [UnitKey.Pinch]: { en: 'pinch', hy: 'պտղունց մը' },
  [UnitKey.Cup]: { en: 'cup', hy: 'գ' },
};
