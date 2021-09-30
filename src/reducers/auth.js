// After actions are dispetched by the mpaDispatchToProps,
// reducers are there to store the state in the redux store.

const auth = function(state = {}, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.errors : null
      };

    case "ASYNC_START":
      if (action.subtype == "LOGIN" || action.subtype == "UPDATE_AUTH_FIELD") {
        return { ...state, inProgress: true };
      }
      break;

    // Instead of dispatching email/password to reducer just
    // store simple states in Login component
    // Redux is firing up update_auth_field so many time, which it
    // really doesn't need to.
    // You only wanna do this if the state is global - which is when
    // multiple components are using the same state.
    case "UPDATE_AUTH_FIELD":
      return { ...state, [action.key]: action.value };

    case "REGISTER":
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.errors : null
      };
  }
  return state;
};

export default auth;
