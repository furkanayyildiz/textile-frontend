import React, { useEffect, useState } from "react";

//page imports
import Card from "../UI/Card/Card";
import { dressingPriceList } from "../../api";
const DressingPriceList = () => {
  const [priceList, setPriceList] = useState([]);

  const getPriceList = async () => {
    let resp = await dressingPriceList();
    setPriceList(resp.data);
  };
  useEffect(() => {
    getPriceList();
  }, []);
  console.log("$$$$$", priceList);
  return (
    <Card>
      <div>
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Process</th>
              <th scope="col">Code</th>
              <th scope="col">Detay</th>
            </tr>
          </thead>
          <tbody>
            {priceList.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.process}</td>
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
export default DressingPriceList;
