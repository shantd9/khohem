export enum UnitKey {
  // Gram = 'gram',
  Tablespoon = 'tablespoon',
  Teaspoon = 'teaspoon',
  Piece = 'piece',
  Pinch = 'pinch',
  Cup = 'cup',
  Kilogram = 'kilogram',
  Gram = 'gram'
}

export const UnitNames: Record<UnitKey, { en: string; hy: string }> = {
  // [UnitKey.Gram]: { en: 'g', hy: 'գ' },
  [UnitKey.Tablespoon]: { en: 'tbsp', hy: 'ա. դգ' },
  [UnitKey.Teaspoon]: { en: 'tsp', hy: 'թ. դգ' },
  [UnitKey.Piece]: { en: 'piece', hy: 'հատ' },
  [UnitKey.Pinch]: { en: 'pinch', hy: 'պտղունց մը' },
  [UnitKey.Cup]: { en: 'cup', hy: 'գ' },
  [UnitKey.Kilogram]: { en: 'kg', hy: 'կգ' },
  [UnitKey.Gram]: { en: 'g', hy: 'կրմ' }
};
