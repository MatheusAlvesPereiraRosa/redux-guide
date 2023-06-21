import UserActionTypes from "../../redux/user/action-types";


const initialState = {
  currentUser: null,
}

const userReducer = (state = initialState, action) => {
  if (action.type === "user/login") {
    return { ...state, currentUser: action.payload}
  }

  return state
};


export default userReducer;
