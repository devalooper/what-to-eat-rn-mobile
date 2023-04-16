import type { Tag as TagType } from "../types";
import shortid from "shortid";

export const DummyIngredients = [
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
  },
  {
    name: "Meat",
    id: 7
  },
  {
    name: "Chicken",
    id: 8
  },
  {
    name: "Beef",
    id: 9
  },
  {
    name: "Pork",
    id: 10
  },
  {
    name: "Fish",
    id: 11
  },
  {
    name: "Egg",
    id: 12
  },
  {
    name: "Milk",
    id: 13
  },
  {
    name: "Cheese",
    id: 14
  },
  {
    name: "Butter",
    id: 15
  },
  {
    name: "Rice",
    id: 16
  }
]

export const ExamplePopulerIngredients: TagType[] = [
  {
    name: "Pepper",
    id: shortid.generate()
  },
  {
    name: "Salt",
    id: shortid.generate()
  },
  {
    name: "Onion",
    id: shortid.generate()
  },
  {
    name: "Garlic",
    id: shortid.generate()
  },
  {
    name: "Tomato",
    id: shortid.generate()
  },
  {
    name: "Potato",
    id: shortid.generate()
  },
  {
    name: "Meat",
    id: shortid.generate()
  },
  {
    name: "Chicken",
    id: shortid.generate()
  },
  {
    name: "Beef",
    id: shortid.generate()
  },
  {
    name: "Pork",
    id: shortid.generate()
  }
]