import CartActionTypes from "./action-types";

const initalState = {
  products: [],
  productsTotalPrice: 0,
};

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      //verificar se o produto já está no carrinho
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      )

      // se ele estiver, aumentar a sua quantidade em 1
      if (productIsAlreadyInCart) {
        return { ...state, products: state.products.map(product => product.id === action.payload.id) };
      }

      //sele ele não estiver, adicioná-lo

    default:
      return state;
  }
};

export default cartReducer;
