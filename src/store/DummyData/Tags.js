import shortid from "shortid";
import { strings } from '@/localization'

export const PopulerIngredientImages = {
  pepper: require('@/assets/ingredients/pepper.png'),
  salt: require('@/assets/ingredients/salt.png'),
  onion: require('@/assets/ingredients/onion.png'),
  garlic: require('@/assets/ingredients/garlic.jpeg'),
  tomato: require('@/assets/ingredients/tomato.png'),
  potato: require('@/assets/ingredients/potato.png'),
  cucumber: require('@/assets/ingredients/cucumber.png'),
  meat: require('@/assets/ingredients/meat.png'),
  chicken: require('@/assets/ingredients/chicken.png'),
  cornflour:require('@/assets/ingredients/cornflour.png'),
  yoghurt:require('@/assets/ingredients/yoghurt.png'),
  beef: require('@/assets/ingredients/beef.png'),
  pork: require('@/assets/ingredients/pork.png'),
  fish: require('@/assets/ingredients/fish.png'),
  egg: require('@/assets/ingredients/egg.png'),
  milk: require('@/assets/ingredients/milk.png'),
  cheese: require('@/assets/ingredients/cheese.png'),
  tomatopaste:require('@/assets/ingredients/tomatopaste.png'),
  pepperpaster:require('@/assets/ingredients/pepperpaste.png'),
  mushroom:require('@/assets/ingredients/mushroom.png'),
  flour:require('@/assets/ingredients/flour.png'),
  nullImage: require('@/assets/ingredients/cucumber.png'),
  oil:require('@/assets/ingredients/oil.png'),
  bread:require('@/assets/ingredients/cucumber.png'),
  greenlentil:require('@/assets/ingredients/greenlentil.png'),
  mint:require('@/assets/ingredients/mint.png'),
  oilveoil:require('@/assets/ingredients/oliveoil.png'),
  parsley:require('@/assets/ingredients/parsley.png'),
  chilipepper:require('@/assets/ingredients/chilipepper.png'),
  redonion:require('@/assets/ingredients/redonion.png'),
  lemon:require('@/assets/ingredients/lemon.png'),
  spinach:require('@/assets/ingredients/spinach.png'),
  dryyeast:require('@/assets/ingredients/dryyeast.png'),
  dough:require('@/assets/ingredients/dough.png'),
  courgette:require('@/assets/ingredients/courgette.png'),
  cream:require('@/assets/ingredients/cream.png'),
  rice:require('@/assets/ingredients/rice.png'),
  walnut:require('@/assets/ingredients/walnut.png'),
  powderedsugar:require('@/assets/ingredients/powderedsugar.png'),
  sugar:require('@/assets/ingredients/sugar.png'),
  bakingpowder:require('@/assets/ingredients/bakingpowder.png'),
  beans:require('@/assets/ingredients/beans.png'),
  tarhana:require('@/assets/ingredients/tarhana.jpeg'),
  meatwater:require('@/assets/ingredients/meatwater.png'),
  cumin:require('@/assets/ingredients/cumin.png'),
  oregaron:require('@/assets/ingredients/oregaron.png'),
  blackpepper:require('@/assets/ingredients/blackpepper.png')

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