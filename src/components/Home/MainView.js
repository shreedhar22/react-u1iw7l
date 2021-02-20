"use strict";
import ArticleList from "./ArticleList.js";
import React from "react";

const MainView = props => {
  return (
    <div>
      <ArticleList articles={props.articles} />
    </div>
  );
};

export default MainView;
