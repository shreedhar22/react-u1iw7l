const ArticlePreview = props => {
  article = props.article;
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a>
          <img src={article.author.image} />
        </a>

        <div>
          <a className="author">{article.author.username}</a>
          <span className="date">
            {new Date(article.createdAt).toDateString()}
          </span>
        </div>

        <a to={`article/${article.slug}`} className="preview-link">
          <h2> {article.title} </h2>
          <p> {article.description}</p>
          <span> Read More ... </span>
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
      </div>
    </div>
  );
};
