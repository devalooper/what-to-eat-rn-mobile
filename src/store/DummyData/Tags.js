import shortid from "shortid";
import { strings } from '@/localization'

export const PopulerIngredientImages = {
  pepper: require('@/assets/ingredients/pepper.png'),
  salt: null,
  onion: require('@/assets/ingredients/onion.png'),
  garlic: null,
  tomato: require('@/assets/ingredients/tomato.png'),
  potato: require('@/assets/ingredients/potato.png'),
  cucumber: require('@/assets/ingredients/cucumber.png'),
  meat: null,
  chicken: null,
  beef: null,
  pork: null,
  fish: null,
  egg: null,
  milk: null,
  cheese: null,
  nullImage: null,
}

export const getPopularIngredients = () => {
  const ingredients = []

  for(const [key, value] of Object.entries(strings.popularIngredients)) {
    ingredients.push({
      name: value,
      image: PopulerIngredientImages[key] || PopulerIngredientImages['cucumber'],
      id: shortid.generate()
    })
  }

  return ingredients
}