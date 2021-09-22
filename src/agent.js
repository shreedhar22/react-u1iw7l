"use strict";

import superagentPromise from "superagent-promise";
import _superagent from "superagent";

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = "https://conduit.productionready.io/api";

const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set("authorization", `Token ${token}`);
  }
};

const requests = {
  get: url => superagent.get(`${API_ROOT}${url}`).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).then(responseBody)
};

const Articles = {
  all: page => requests.get("/articles?limit=10"),
  createArticle: (title, description) =>
    requests.post("/articles/create", { article: { title, description } })
};

const Comments = {
  populate: article_slug => requests.get(`/articles/${article_slug}/comments`),
  postComment: (article_slug, value) =>
    requests.post("/articles/" + article_slug + "/comments/", value)
};

const Auth = {
  current: () => requests.get("/user/current"),
  login: (email, password) =>
    requests.post("/users/login", { user: { email, password } }),
  register: (email, password) =>
    requests.post("/users/register", { user: { email, password } })
};

console.log("auth current: " + Auth.current());

export default {
  Articles,
  Auth,
  setToken: _token => {
    token = _token;
  },
  Comments
};
