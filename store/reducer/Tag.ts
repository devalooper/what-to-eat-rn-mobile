import type { Tag } from "../types";

export const ACTION_TYPE = {
  ADD_TAG: 'ADD_TAG',
  REMOVE_TAG: 'REMOVE_TAG',
}

const dummyTags = [
  {
    name: "Pepper",
    id: 1
  },
  {
    name: "Salt",
    id: 2
  },
  {
    name: "Onion",
    id: 3
  },
  {
    name: "Garlic",
    id: 4
  },
  {
    name: "Tomato",
    id: 5
  },
  {
    name: "Potato",
    id: 6
  }
]

export default function TagReducer(state: Tag[] = dummyTags, action: any) {
  switch (action.type) {
    case ACTION_TYPE.ADD_TAG:
      return [...state, action.payload];
    case ACTION_TYPE.REMOVE_TAG:
      return state.filter(tag => tag.id !== action.payload);
    default:
      return state;
  }
}