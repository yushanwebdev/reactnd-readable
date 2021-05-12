import * as Helpers from "./helpers";

const api = process.env.REACT_APP_API_URL;

let token = localStorage.token;
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const getPosts = () =>
  fetch(`${api}/posts/`, { headers }).then((res) => res.json());

export const getPost = (id) =>
  fetch(`${api}/posts/${id}`, { headers }).then((res) => res.json());

export const votePost = (id, option) =>
  fetch(`${api}/posts/${id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      option,
    }),
  }).then((res) => res.json());

export const addPost = ({ title, body, author, category }) =>
  fetch(`${api}/posts/`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: Helpers.generateUID(),
      timestamp: Helpers.currentDate(),
      title,
      body,
      author,
      category,
    }),
  }).then((res) => res.json());

export const updatePost = ({ id, title, body }) =>
  fetch(`${api}/posts/${id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      body,
    }),
  }).then((res) => res.json());

export const getCategories = () =>
  fetch(`${api}/categories/`, { headers }).then((res) => res.json());

export const getCategoryPosts = (path) =>
  fetch(`${api}/${path}/posts`, { headers }).then((res) => res.json());

export const addCommments = ({ body, author, parentId }) =>
  fetch(`${api}/comments/`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: Helpers.generateUID(),
      timestamp: Helpers.currentDate(),
      body,
      author,
      parentId,
    }),
  }).then((res) => res.json());

export const getComment = (id) =>
  fetch(`${api}/comments/${id}`, { headers }).then((res) => res.json());

export const voteComment = (id, option) =>
  fetch(`${api}/comments/${id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      option,
    }),
  }).then((res) => res.json());

export const updateComment = ({ id, body }) =>
  fetch(`${api}/comments/${id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      timestamp: Helpers.currentDate(),
      body,
    }),
  }).then((res) => res.json());

export const deleteComment = (id) =>
  fetch(`${api}/comments/${id}`, {
    method: "DELETE",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      deleted: true,
    }),
  }).then((res) => res.json());
