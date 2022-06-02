import axios from "axios";

export const productList = async () => {
  const token = localStorage.getItem("token");
  const resp = await axios.get("api/products/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return resp;
};
