const defaultState = {
  articles: [],
  comments: null
};

const home = function(state = defaultState, action) {
  switch (action.type) {
    case "HOME_PAGE_LOADED": {
      console.log("articels from reducer: " + action.payload.articles);
      return { ...state, articles: action.payload.articles };
    }

    case "POPULATE_COMMENTS": {
      console.log("comments from reducer: " + action.payload.comments);
      return { ...state, comments: action.payload.comments };
    }

    case "POST_COMMENT": {
      return { ...state };
    }

    // case "UPDATE_COMMENT": {
    //   return { ... state, action.}
    // }
  }
  return state;
};

export default home;
