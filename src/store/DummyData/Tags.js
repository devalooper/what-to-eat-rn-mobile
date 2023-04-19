import shortid from "shortid";
import { strings } from '@/localization'

const PopulerIngredientImages = {
  pepper: require('@/assets/ingredients/pepper.png'),
  salt: require('@/assets/ingredients/pepper.png'),
  onion: require('@/assets/ingredients/onion.png'),
  garlic: require('@/assets/ingredients/pepper.png'),
  tomato: require('@/assets/ingredients/tomato.png'),
  potato: require('@/assets/ingredients/potato.png'),
  meat: require('@/assets/ingredients/pepper.png'),
  chicken: require('@/assets/ingredients/pepper.png'),
  beef: require('@/assets/ingredients/pepper.png'),
  pork: require('@/assets/ingredients/pepper.png'),
  fish: require('@/assets/ingredients/pepper.png'),
  egg: require('@/assets/ingredients/pepper.png'),
  milk: require('@/assets/ingredients/pepper.png'),
  cheese: require('@/assets/ingredients/pepper.png'),
  nullImage: require('@/assets/ingredients/pepper.png'),
}

export const getPopularIngredients = () => Object.keys(strings.popularIngredients).map((item) => {

  return {
    name: item,
    image: PopulerIngredientImages[item],
    id: shortid.generate()
  }
})