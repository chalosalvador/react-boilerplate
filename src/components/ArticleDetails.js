/**
 * Created by chalosalvador on 2/26/20
 */
import React from "react";

const ArticleList = (props) => {
  return (
    <div>
      {
        props.article ?
          props.article.title
          : null
      }
    </div>
  );
};

export default ArticleList;
