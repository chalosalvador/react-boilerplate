/**
 * Created by chalosalvador on 2/6/20
 */
export default (state, action) => {
  switch (action.type) {
    case 'loginUser':
      return {
        ...state,
        isAuthenticated: true,
        ...action.payload,
      };
    case 'logoutUser':
      return {
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
