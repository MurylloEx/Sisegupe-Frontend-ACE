import axios from "axios";

const Api = axios.create({
  baseURL: "https://sisegupe.observatorio.site",
});

export default Api;
