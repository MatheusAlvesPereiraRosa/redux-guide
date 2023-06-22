export const selectProductsCount = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(() => ,0)
}