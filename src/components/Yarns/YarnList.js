import React, { useEffect, useState } from "react";
import axios from "axios";
//page imports
import Card from "../UI/Card/Card";
import { yarnList } from "../../api";
const YarnList = () => {
  const [yarns, setYarns] = useState([]);

  const getYarnList = async () => {
    // const token = localStorage.getItem("token");
    // await axios
    //   .get("api/yarns", {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then((resp) => setYarns(resp.data));
    let resp = await yarnList();
    setYarns(resp.data);
  };
  useEffect(() => {
    getYarnList();
  }, []);
  console.log("#######", yarns);

  return (
    <Card>
      <div>
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Code</th>
              <th scope="col">Detay</th>
            </tr>
          </thead>
          <tbody>
            {yarns.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.code}</td>
                <td>
                  <button type="button" className="btn btn-info">
                    Info
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default YarnList;
