const defaultState = {
  appName: 'Conduit',
  token: 'null'
};

const common = (state = defaultState, action) => {
  // actions to store a session of the user logged in

  switch (action.type) {
    case 'APP_LOAD':
      return {
        ...state,
        token: action.token || null,
        appLoaded: true,
        currentUser: action.payload ? action.payload.user : null
      };

    case 'REDIRECT':
      return { ...state, redirectTo: null };

    case 'LOGIN':
      return {
        ...state,
        redirectTo: action.error ? null : '/',
        token: action.error ? null : action.payload.user.token,
        currentUser: action.error ? null : action.payload.user
      };
  }
  return state;
};

export default common;
