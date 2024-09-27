import axios from "axios";

const API = `https://655655bc84b36e3a431f9829.mockapi.io/posts`;

const service = {
  get: (id) =>
    axios(id ? API + `/${id}` : API)
      .then(({ data }) => data),
  delete: (id) =>
    axios
      .delete(API + `/${id}`)
      .then(({ data }) => data),
  put: (id, item) =>
    axios
      .put(API + `/${id}`, item)
      .then(({ data }) => data),
  post: (item) =>
    axios
      .post(API, item)
      .then(({ data }) => data)
};

export default service;
