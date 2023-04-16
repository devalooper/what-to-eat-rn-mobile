import type { Tag } from "../types";

export const ACTION_TYPE = {
  ADD_TAG: 'ADD_TAG',
  REMOVE_TAG: 'REMOVE_TAG',
}

export default function TagReducer(state: Tag[], action: any) {
  switch (action.type) {
    case ACTION_TYPE.ADD_TAG:
      return [...state, action.payload];
    case ACTION_TYPE.REMOVE_TAG:
      return state.filter(tag => tag.id !== action.payload);
    default:
      return state;
  }
}