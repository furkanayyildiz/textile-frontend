import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//page imports
import { getYarn } from "../../api";
const YarnDetail = () => {
  let { yarnId } = useParams();

  const [yarn, setYarn] = useState({});

  const getYarnInfo = async () => {
    let resp = await getYarn(yarnId);
    setYarn(resp.data);
    console.log("yarn info", yarn);
  };
  useEffect(() => {
    getYarnInfo();
  }, []);
  return (
    <div>
      <h1>merhaba</h1>
    </div>
  );
};

export default YarnDetail;
