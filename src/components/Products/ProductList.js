import React, { useEffect, useState } from "react";

//page imports
import Card from "../UI/Card/Card";
import { productList } from "../../api";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProductList = async () => {
    let resp = await productList();
    setProducts(resp.data);
  };
  useEffect(() => {
    getProductList();
  }, []);
  console.log("$$$$$", products);
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
          <tbody></tbody>
        </table>
      </div>
    </Card>
  );
};
export default ProductList;
