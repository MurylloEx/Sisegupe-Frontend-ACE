import axios from "axios";

const Api = axios.create({
  baseURL: "sisegupe.observatorio.site",
});

export default Api;
