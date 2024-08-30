const API = `https://jsonplaceholder.typicode.com/todos`;

const service = {
  get: (id) =>
    fetch(id ? API + `/${id}` : API)
      .then((data) => data.json())
      .catch((err) => console.log(err)),
  delete: (id) =>
    fetch(API + `/${id}`, { method: `DELETE` })
      .then((data) => data.json())
      .catch((err) => console.log(err)),

  patch: (id, item) =>
    fetch(API + `/${id}`, {
      method: `PATCH`,
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((data) => data.json())
      .catch((err) => console.log(err)),
  put: (id, item) =>
    fetch(API + `/${id}`, {
      method: `PUT`,
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((data) => data.json())
      .catch((err) => console.log(err)),
  post: (item) =>
    fetch(API, {
      method: `POST`,
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((data) => data.json())
      .catch((err) => console.log(err)),
};

export default service;
