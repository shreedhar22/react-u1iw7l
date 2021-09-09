const defaultState = {
  articles: null,
  comments: null
};

const home = function(state = defaultState, action) {
  switch (action.type) {
    case 'HOME_PAGE_LOADED': {
      console.log('articels from reducer: ' + action.payload.articles);
      return { ...state, articles: action.payload.articles };
    }

    case 'POPULATE_COMMENTS': {
      console.log('comments from reducer: ' + action.payload.comments);
      return { ...state, comments: action.payload.comments };
    }
  }
  return state;
};

export default home;
