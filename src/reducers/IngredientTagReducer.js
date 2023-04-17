import { INGREDIENT_TAG } from '@/constants';

export const ingredientTagReducer = (state = [], { payload, type}) => {
  switch (type) {
    case INGREDIENT_TAG.ADD_TAG:
      return [...state, payload];
    case INGREDIENT_TAG.REMOVE_TAG:
      return state.filter(tag => tag.id !== payload);
    default:
      return state;
  }
}