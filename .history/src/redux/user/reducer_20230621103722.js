import UserActionTypes from "../../redux/user/action-types";

const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.LOGIN {
      return { ...state, currentUser: action.payload };
    }
  
    if (action.type === UserActionTypes.LOGOUT) {
      return { ...state, currentUser: null };
    }
  
    return state;
  }
};

export default userReducer;
