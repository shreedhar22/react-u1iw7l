"use strict";

import ArticlePreview from "./ArticlePreview";
import React from "react";

class ArticleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.articles = props.articles;
  }

  render() {
    if (!this.articles) {
      return <div className="article-preview">Loading...</div>;
    }

    if (this.articles.length === 0) {
      return (
        <div className="article-preview">No articles are here... yet.</div>
      );
    }

    return (
      <div>
        {this.articles.map(article => {
          return <ArticlePreview article={article} key={article.slug} />;
        })}
      </div>
    );
  }
}

export default ArticleContainer;
