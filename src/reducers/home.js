const defaultState = {
  articles: [],
  comments: []
};

// After actions are dispetched by the mpaDispatchToProps,
// reducers are there to store the state in the redux store.
// In ths Home Reducer, the state of the articles and comments
// are stored after actions are dispatched along with the respective
// payloads(articles and comments).

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
