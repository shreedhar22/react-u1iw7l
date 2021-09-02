const defaultState = {
  articles: null,
  comments: null
};

const home = function(state = defaultState, action) {
  switch (action.type) {
    case 'HOME_PAGE_LOADED': {
      return { ...state, articles: action.payload.articles };
    }

    case 'POPULATE_COMMENTS': {
      return { ...state, comments: action.payload.article_slug };
    }
  }
  return state;
};

export default home;
