import ArticleContainer from "../ArticleContainer";
import React from "react";
import { connect } from "react-redux";
import SearchFilter from "../SearchFilter";

const mapStateToProps = state => ({
  articles: state.home.articles
});

class MainView extends React.Component {
  constructor(props) {
    super(props);
    console.log("props in Main View: " + JSON.stringify(props));
    this.articles = props.articles;
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-9">
          <div className="feed-toggle">
            <ul className="nav nav-pills outline-active">
              <li className="nav-item">
                <a href="" className="nav-link active">
                  Global Feed
                </a>
              </li>
            </ul>
          </div>
          <ArticleContainer articles={this.articles} />
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="sidebar">
              <p>Popular Tags</p>
            </div>
            <br />
            <div className="sidebar">
              <SearchFilter articles={this.articles} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(MainView);
