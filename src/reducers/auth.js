const auth = function(state = {}, action) {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.errors : null
      };
    }

    case 'ASYNC_START': {
      if (action.subtype == 'LOGIN' || action.subtype == 'UPDATE_AUTH_FIELD') {
        return { ...state, inProgress: true };
      }
      break;
    }

    case 'UPDATE_AUTH_FIELD': {
      return { ...state, [action.key]: action.value };
    }
  }
  return state;
};

export default auth;
