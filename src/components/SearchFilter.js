import React from "react";
import { connect } from "react-redux";
import common from "../reducers/common";

const filters = {
  today: false,
  recent: false,
  favorited: false,
  popular: false
};

const popularTags = {
  reactjs: false,
  javascript: false,
  nodejs: false,
  java: false,
  go: false
};

class SearchFilter extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    this.articles = props.articles;
    console.log("articles in Search Filter: " + JSON.stringify(this.articles));

    this.toggleFilters = value => {
      if (filters[value] == false) {
        filters[value] = true;
      } else if (filters[value] == true) {
        filters[value] = false;
      }
    };

    this.filterArticles = () => {
      var filteredArticles = this.articles;
      if (filters["today"] == true) {
        var today = new Date();
        var todays_date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();

        console.log("today's date is " + todays_date);

        filteredArticles.filter(article => {
          var article_date = article.createdAt.split("T");
          return article_date == todays_date;
        });
      }

      console.log(
        "filteredArticles are after filtering today's articles" +
          filteredArticles
      );

      if (filters["popular"] == true) {
        filteredArticles.filter(function(article) {
          return article.favoritesCount >= 50;
        });
      }

      console.log(
        "filteredArticles are after filtering popular ones" + filteredArticles
      );
    };
  }

  render() {
    return (
      <div>
        <h> Search Filters </h>
        <li>
          <input onClick={() => this.toggleFilters("today")} type="checkbox" />
          <a> Today </a>
        </li>

        <li>
          <input onClick={() => this.toggleFilters("recent")} type="checkbox" />
          <a> Recent </a>
        </li>
        <li>
          <input
            onClick={() => this.toggleFilters("popular")}
            type="checkbox"
          />
          <a> Popular </a>
        </li>

        <button type="submit" onClick={() => this.filterArticles()}>
          Apply Filters
        </button>
      </div>
    );
  }
}

export default SearchFilter;
