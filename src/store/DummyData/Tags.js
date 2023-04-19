import shortid from "shortid";
import { strings } from '@/localization'

export const getPopularIngredients = () => Object.keys(strings.popularIngredients).map((item) => {
  return {
    name: item,
    id: shortid.generate()
  }
})