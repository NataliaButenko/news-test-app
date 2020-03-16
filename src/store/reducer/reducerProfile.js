import { LOGIN } from "../actions/login";
import { LOGOUT } from "../actions/logout";
export const reducerProfile = (state = false, action) => {
  switch (action.type) {
    case LOGIN: {
      return action.payload;
    }
    case LOGOUT: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
