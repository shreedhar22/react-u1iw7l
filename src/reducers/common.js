const defaultState = {
  appName: "Conduit",
  token: "null",
  currentUser: "null"
};

// After actions are dispatched by the mpaDispatchToProps,
// reducers are there to store the state in the redux store.
// In the Common Reducer, the states of the current user and the
// token are stored after actions and dipatched along with the
// user payload.

const common = (state = defaultState, action) => {
  // whatever you wish to use on your web-page view(component),
  // should be in the state array defined using the spread operator

  // actions to store a session of the user logged in

  switch (action.type) {
    case "APP_LOAD":
      return {
        ...state,
        token: action.token || null,
        appLoaded: true,
        currentUser: action.payload ? action.payload.user : null
      };

    case "REDIRECT":
      return { ...state, redirectTo: null };

    case "LOGIN":
      return {
        ...state,
        redirectTo: action.error ? null : "/",
        token: action.error ? null : action.payload.user.token,
        currentUser: action.error ? null : action.payload.user
      };
  }
  return state;
};

export default common;
