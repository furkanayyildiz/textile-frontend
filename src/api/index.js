import axios from "axios";

export const register = async (data) => {
  const resp = await axios.post("register", data);

  return resp.status === 200 ? true : false;
};
