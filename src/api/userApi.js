import axios from "axios";

export const fetchUsers = async () => {
  const res = await axios.get("https://randomuser.me/api/", {
    params: {
      nat: "us",
      results: 10,
    },
  });
  return res.data.results;
};
