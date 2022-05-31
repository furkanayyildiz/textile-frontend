import axios from "axios";

export const dressingPriceList = async () => {
  const token = localStorage.getItem("token");
  const resp = await axios.get("api/dressingPriceList", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return resp;
};
