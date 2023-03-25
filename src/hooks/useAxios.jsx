import axios from "axios";

const BASE_URL = "https://12147.fullstack.clarusway.com/";

const instance = axios.create({
  baseURL: "https://some-domain.com/api/",
  headers: { "X-Custom-Header": "foobar" },
});

return {};

export default useAxios;
