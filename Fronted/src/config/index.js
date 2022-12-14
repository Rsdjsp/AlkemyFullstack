import axios from "axios";

const URL = "http://localhost:4000";

const instance = axios.create({
  baseURL: URL,
});

const get = async (url) => {
  return await instance.get(url, {
    withCredentials: true,
  });
};

const post = async (url, data) => {
  return await instance.post(url, data, {
    withCredentials: true,
  });
};

const put = async (url, data) => {
  return await instance.put(url, data, {
    withCredentials: true,
  });
};

const remove = async (url) => {
  return await instance.delete(url, {
    withCredentials: true,
  });
};

export default instance;
export { get, post, put, remove };
