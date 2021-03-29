import * as Helpers from './helpers';

const api = process.env.REACT_APP_API_URL;

let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const getPosts = () =>
    fetch(`${api}/posts/`, { headers })
        .then(res => res.json())

export const getPost = (id) =>
    fetch(`${api}/posts/${id}`, { headers })
        .then(res => res.json())

export const votePost = (id, option) =>
    fetch(`${api}/posts/${id}`, {
        method: "POST",
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            option
        })
    })
        .then(res => res.json())

export const addPost = ({ title, body, author, category }) =>
    fetch(`${api}/posts/`, {
        method: "POST",
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: Helpers.generateUID(),
            timestamp: Helpers.currentDate(),
            title,
            body,
            author,
            category
        })
    })
        .then(res => res.json())

export const updatePost = ({ id, title, body }) =>
    fetch(`${api}/posts/${id}`, {
        method: "PUT",
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            body
        })
    })
        .then(res => res.json())