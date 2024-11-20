const LOAD_ARTICLES = 'article/loadArticles';
const ADD_ARTICLE = 'article/addArticle';

export const loadArticles = (articles) => {
  // console.log("Step 6v2: In action creator", articles)
  return {
      type: LOAD_ARTICLES,
      articles,
  };
};



export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    article
  };
};

export const fetchArticles = () => async dispatch => {
  const response = await fetch('/api/articles');
  const articles = await response.json();
  dispatch(loadArticles(articles));
};

export const addArticleThunk = (articleFormData) => async (dispatch) => {
  const res = await fetch("/api/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleFormData),
  });

  if (res.ok) {
    const newArticle = await res.json();
    dispatch(addArticle([newArticle]));
    return null;
  } else {
    const errors = await res.json();
    return errors;
  }
};

export const writeArticle = (payload) => async dispatch => {
  const response = await fetch('/api/articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const newArticle = await response.json();
  dispatch(addArticle(newArticle));
  return newArticle; 
};




const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    case ADD_ARTICLE:
      return { ...state, entries: [...state.entries, action.article] };
    default:
      return state;
  }
};

export default articleReducer;