import React from 'react';

const mapDispatchToProps = dispatch => ({
  // ToDo: correct the payload argument
  //onChangeComment: value =>
  //  dispatch({ type: 'COMMENT', payload: agent.Article.comment() })
});

const ArticlePreview = props => {
  const article = props.article;

  changeComment = event => props.onChangeComment(event.target.value);

  return (
    <div className="article-preview">
      <div className="article-meta">
        <a>
          <img src={article.author.image} />
        </a>

        <div className="info">
          <a className="author">{article.author.username}</a>
          <span className="date">
            {new Date(article.createdAt).toDateString()}
          </span>
        </div>

        <div className="pull-xs-right">
          <button className="btn btn-sm btn-outline-primary">
            <i className="ion-heart" /> {article.favoritesCount}
          </button>
        </div>
      </div>

      <a to={`article/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {article.tagList.map(tag => {
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
        onChange={changeComment}
      />
    </div>
  );
};

export default ArticlePreview;
