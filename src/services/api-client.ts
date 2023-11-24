import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e460f2bcbd274f8da1eab7f1c464ee5e",
  },
});
