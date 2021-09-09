'use strict';

import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://conduit.productionready.io/api';

const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
};

const requests = {
  get: url => superagent.get(`${API_ROOT}${url}`).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).then(responseBody)
};

const Articles = {
  all: page => requests.get('/articles?limit=10'),
  createArticle: (title, description) =>
    requests.post('/articles/create', { article: { title, description } })
  // ToDo: correct the GET request to get comment of an article and uncomment it.
  //
};

console.log('Articles: ' + Articles.all);

const Comments = {
  populate: article_slug =>
    requests.get('articles/{slug}/comments', { slug: article_slug })
};

// getComments().then() = commentsObj => ({
//   console.log(commentsObj)
// })

console.log('Comments: ' + Comments.populate);

const Auth = {
  current: () => requests.get('/user'),
  login: (email, password) =>
    requests.post('/users/login', { user: { email, password } }),
  register: (email, password) =>
    requests.post('/users/register', { user: { email, password } })
};

export default {
  Articles,
  Auth,
  setToken: _token => {
    token = _token;
  },
  Comments
};
