import axios from "axios";

export const yarnList = async () => {
  const token = localStorage.getItem("token");
  const resp = await axios.get("api/yarns", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return resp;
};

export const getYarn = async (yarnId) => {
  const token = localStorage.getItem("token");
  const resp = await axios.get(`api/yarn/${yarnId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return resp;
};
