import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'

import './SingleArticle.css';

const SingleArticle = () => {
  const {id} = useParams();
  const article = useSelector((state)=>state.articleState.entries.find((article)=>article.id ===id))


  return (
    <div className='singleArticle'>
      <h1>{article.title}</h1>
      <img
        src={article.imageUrl}
        alt={article.title}
      />
      <p>{article.body}</p>
    </div>
  );
};

export default SingleArticle;
