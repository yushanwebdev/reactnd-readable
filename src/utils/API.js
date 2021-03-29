const api = process.env.REACT_APP_API_URL;

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const get = () =>
    fetch(`${api}/posts/`, { headers })
        .then(res => res.json())
        .then(data => data)

export const getPost = (postId) =>
    fetch(`${api}/posts/${postId}`, { headers })
        .then(res => res.json())
        .then(data => console.log(data))

export const votePost = (postId, option) =>
    fetch(`${api}/posts/${postId}`, {
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