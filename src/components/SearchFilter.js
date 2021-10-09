import React from "react";
import { connect } from "react-redux";

const filters = ["today", "recent", "favorited", "hundredLikesOrMore"];

const tagList = ["react", "javascript", "nodejs", "java", "go"];

class SearchFilter extends React.Component {
  constructor(props) {
    super(props);
    this.articles = props.articles;

    this.handleFilters = () => {};
  }

  render() {
    return (
      <div>
        <h> Search Filters </h>
        <li>
          <input onClick={this.handleFilters} type="checkbox" />
          <a> Today </a>
        </li>

        <li>
          <input onClick={this.handleFilters} type="checkbox" />
          <a> Recent </a>
        </li>
        <li>
          <input onClick={this.handleFilters} type="checkbox" />
          <a> Popular </a>
        </li>
      </div>
    );
  }
}

export default SearchFilter;
