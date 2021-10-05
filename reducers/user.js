export const initialState = {
  isLoggedIn: false,
  me: null,
  signData: {},
  loginData: {},
};

// action creator
export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case "LOG_OUT":
      return {
        user: {
          ...state.user,
          isLoggedIn: false,
          me: null,
        },
      };
    default:
      return state;
  }
};

export default reducer;
