const defaultState = {
  testtest: 'yeeeeppp',
  auth: {},
};


const AuthReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_AUTH_TOKEN':
      return {
        ...state,
        auth: {
          authToken: action.authToken,
        },
      };
    default:
      return state;
  }
};

export default AuthReducer;
