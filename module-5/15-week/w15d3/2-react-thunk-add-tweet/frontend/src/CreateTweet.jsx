import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTweet } from './store/tweet';

function CreateTweet() {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return; 
    dispatch(createTweet(content));
    setContent(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's happening?"
        rows="3"
      />
      <button type="submit">Tweet</button>
    </form>
  );
}

export default CreateTweet;
