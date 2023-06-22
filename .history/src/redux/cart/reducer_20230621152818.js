import CartActionTypes from "./action-types";

const initalState = {
  products: [],
  productsTotalPrice: 0
}

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      return { ...initalState, products: [...initalState, action.payload]}

    default:
      return state;
  }
}

export default cartReducer