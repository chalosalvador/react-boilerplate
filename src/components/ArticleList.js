/**
 * Created by chalosalvador on 2/26/20
 */
import React from "react";
import Article from "../services/article";
import ArticleDetails from "./ArticleDetails";

const initialState = {
  articles: []
};
const ArticleList = () => {

  // Fetch articles
  const [articles, setArticles] = React.useState(initialState.articles);
  React.useEffect(() => {
    const fetchArticles = async () => {
      try {
        const allArticles = await Article.getAll();
        setArticles(allArticles);
      } catch (e) {
        alert(e.message);
      }
    };
    fetchArticles();
  }, []);

  // get article
  const [articleDetails, setArticleDetails] = React.useState(initialState.articleDetails);
  const getArticle = async (id) => {
    try {
      console.log('id', id);
      const response = await Article.get(id);
      setArticleDetails(response);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <ul>
      {
        articles.map((article, i) => <li key={i} onClick={() => getArticle(article.id)}>{article.title}</li>)
      }

      {
        articleDetails && <ArticleDetails article={articleDetails}/>
      }
    </ul>
  );
};

export default ArticleList;
