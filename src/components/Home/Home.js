import React from "react";

//page imports
import classes from "./Home.module.css";
import product from "../../img/textile-product-photo.jpg";
import yarn from "../../img/textile-yarn-photo.jpg";
import dressingPriceList from "../../img/textile-dressing-price-list-photo.jpg";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const navigatePrice = useNavigate();
  const navigateProduct = useNavigate();
  const navigateYarnList = () => {
    navigate("/yarnlist");
  };
  const navigatePriceList = () => {
    navigatePrice("/dressingpricelist");
  };
  const navigateProductList = () => {
    navigateProduct("/productlist");
  };

  return (
    <div className={classes.home}>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src={product} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">PRODUCT</h5>
              <p className="card-text">
                View over 100 product types and properties
              </p>
            </div>
            <div className="card-footer">
              <div className="d-grid gap-2 ">
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={navigateProductList}
                >
                  Product List
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={yarn} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">YARN</h5>
              <p className="card-text">
                View over 100 yarn types and properties.
              </p>
            </div>
            <div className="card-footer">
              <div className="d-grid gap-2 ">
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={navigateYarnList}
                >
                  Yarn List
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={dressingPriceList} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">DRESSING PRICE LIST</h5>
              <p className="card-text">
                View the price list of all available products and yarns.
              </p>
            </div>
            <div className="card-footer">
              <div className="d-grid gap-2 ">
                <button
                  className="btn btn-danger "
                  type="button"
                  onClick={navigatePriceList}
                >
                  Dressing Price List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
