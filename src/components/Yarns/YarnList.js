import React, { useEffect, useState } from "react";

//page imports
import Card from "../UI/Card/Card";
import { yarnList } from "../../api";
import { useNavigate } from "react-router-dom";
const YarnList = () => {
  const [yarns, setYarns] = useState([]);
  const navigate = useNavigate();
  const getYarnList = async () => {
    let resp = await yarnList();
    setYarns(resp.data);
  };
  useEffect(() => {
    getYarnList();
  }, []);
  console.log("#######", yarns);
  const navigateYarn = () => {
    window.location.href = `/yarndetail/${yarns.id}`;
    console.log("####", yarns.id);
  };

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
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={navigateYarn}
                  >
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
