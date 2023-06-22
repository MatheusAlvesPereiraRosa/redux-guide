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
      );

      // se ele estiver, aumentar a sua quantidade em 1
      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      }

    case CartActionsTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
      };

      //sele ele não estiver, adicioná-lo
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };

    default:
      return state;
  }
};

export default cartReducer;
