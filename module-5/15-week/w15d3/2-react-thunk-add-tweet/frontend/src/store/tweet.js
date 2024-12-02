// constant to avoid debugging typos
const GET_ALL_TWEETS = 'tweet/getAllTweets';
const ADD_TWEET = 'tweet/ADD_TWEET'

//regular action creator
const loadTweets = (tweets) => {
  return {
    type: GET_ALL_TWEETS,
    tweets
  };
};

const addTweets = (tweet) =>{
  return {
    type: ADD_TWEET,
    tweet
  }
}

// thunk action creator
export const getAllTweets = () => async (dispatch) => {
  const response = await fetch('/api/tweets');

  if (response.ok) {
    const data = await response.json();
    dispatch(loadTweets(data));
    return data;
  }
};

export const createTweet = (content) => async (dispatch) => {
  const response = await fetch('/api/tweets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content }),
  });

  if (response.ok) {
    const tweet = await response.json();
    dispatch(addTweets(tweet));
  }
};



// state object
const initialState = {};

// reducer
const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TWEETS: {
      const newState = {};
      action.tweets.forEach((tweet) => (newState[tweet.id] = tweet));
      return newState;
    }
    case ADD_TWEET: {
      return {
        ...state,
        [action.tweet.id]: action.tweet,
      };
    }   
    default:
      return state;
  }
};


export default tweetsReducer;
