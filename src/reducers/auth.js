import {LOGIN_ACTION, LOGOUT_ACTION} from "../constants/actions";

/**
 * Created by chalosalvador on 2/6/20
 */
export default (state, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        ...state,
        isAuthenticated: true,
        ...action.payload,
      };
    case LOGOUT_ACTION:
      return {
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
