import React from 'react';
import { connect } from 'react-redux';
import agent from '../agent';

const mapDispatchToProps = dispatch => ({
  // ToDo: correct the payload argument, define COMMENT in reducer
  onChangeComment: value =>
    dispatch({ type: 'COMMENT', payload: agent.Article.comment() })
});

class ArticlePreview extends React.Component {
  constructor(props) {
    super();
    this.article = props.article;
    // ToDo: this will only work after defining the changeComment function in dispatch
    this.changeComment = event =>
      this.props.onChangeComment(event.target.value);
  }

  render() {
    return (
      <div className="article-preview">
        <div className="article-meta">
          <a>
            <img src={this.article.author.image} />
          </a>

          <div className="info">
            <a className="author">{this.article.author.username}</a>
            <span className="date">
              {new Date(this.article.createdAt).toDateString()}
            </span>
          </div>

          <div className="pull-xs-right">
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart" /> {this.article.favoritesCount}
            </button>
          </div>
        </div>

        <a to={`article/${this.article.slug}`} className="preview-link">
          <h1>{this.article.title}</h1>
          <p>{this.article.description}</p>
          <span>Read more...</span>
          <ul className="tag-list">
            {this.article.tagList.map(tag => {
              return (
                <li className="tag-default tag-pill tag-outline" key={tag}>
                  {tag}
                </li>
              );
            })}
          </ul>
        </a>

        <br />
        <button className="pull-xs-left" type="submit">
          Comment
        </button>
        <br />
        <br />
        <input
          className="form-control form-control-lg"
          placeholder="Whats on your mind"
          value="comment"
          onChange={this.changeComment}
        />
      </div>
    );
  }
}

export default connect(mapDispatchToProps)(ArticlePreview);
