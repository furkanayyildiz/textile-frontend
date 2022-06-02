import axios from "axios";

export const register = async (data) => {
  const resp = await axios.post("register", data);

  return resp.status === 200 ? true : false;
};

export const signIn = async (data) => {
  const resp = await axios.post("login", data);

  return resp.status === 200 ? resp.data : false;
};
export const getUser = async (userId) => {
  const token = localStorage.getItem("token");
  const resp = await axios.get(`api/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return resp;
};
