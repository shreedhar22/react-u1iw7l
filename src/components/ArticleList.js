"use strict";
import React from "react";

const ArticleList = props => {
  if (!props.articles) {
    return <div className="article-preview">Loading ...</div>;
  }

  if (props.articles.length == 0) {
    return (
      <div className="article-preview"> No articles yet to load here... </div>
    );
  }

  return (
    <div>
      {props.articles.map(article => {
        return <ArticlePreview article={article} />;
      })}
    </div>
  );
};

export default ArticleList;
