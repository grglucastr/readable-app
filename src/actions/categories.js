export const LIST_CATEGORIES = 'LIST_CATEGORIES'

export function listCategories(categories){
  return {
    type: LIST_CATEGORIES,
    categories
  }
}
