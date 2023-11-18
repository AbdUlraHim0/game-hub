import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "61bb831f879e49ddafd932d19b04816e",
  },
});
