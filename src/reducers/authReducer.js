function authReducer(state = { token: "" }, action) {
  switch (action.type) {
    case "TOKEN_USER":
      return {
        ...state,
        token: action.payload,
      };

    case "LOGOUT_REQUEST":
      return {
        token: "",
      };

    default:
      return state;
  }
}
export default authReducer;
