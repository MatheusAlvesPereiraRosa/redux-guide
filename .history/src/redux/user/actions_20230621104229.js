import UserActionTypes from "./action-types";

export const loginUser = () => ({
  type: UserActionTypes.LOGIN,
  payload: { name: "Felipe", email: "Algo@gmail.com" },
});

export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT,
});
