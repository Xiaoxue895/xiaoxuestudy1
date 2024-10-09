import './SingleArticle.css';

import { useParams } from 'react-router-dom'; 
import { useSelector } from 'react-redux';


const SingleArticle = () => {

  const { id } = useParams();

  const articles = useSelector((state) => state.articleState.entries);

  const article = articles.find((article) => article.id === id);

  if (!article) {
    return <div>Article not found or still loading...</div>;
  }

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
