import CartActionTypes from "./actions";

const initalState = {
  products: [],
  productsTotalPrice: 0
}

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      return { ...state, products: [...initalState, action.payload]}



    default:
      return state;
  }
}

export default cartReducer