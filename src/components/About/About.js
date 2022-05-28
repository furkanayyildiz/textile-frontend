import React from "react";
import yarn from "../../img/textile-yarn-photo.jpg";
import Card from "../UI/Card/Card";

const About = () => {
  return (
    <Card>
      <div className="container">
        <div className="row mb-2 justify-content-center">
          <div className="col-lg-5">
            <h2 className="display-4 font-weight-light text-center">
              About Us
            </h2>
            <p className="font-italic text-muted text-center">
              FuMu Tekstil is a fabric and yarn production factory established
              in 2022 in Istanbul, Sariyer, with the initiatives of two software
              developers. This company currently has more than 100 fabrics and
              yarns in its color chart.
            </p>
          </div>
        </div>
        <div className="row mb-4 justify-content-center">
          <div className="col-lg-5">
            <h2 className="display-4 font-weight-light text-center">
              Our Team
            </h2>
          </div>
        </div>

        <div className="row text-center justify-content-center">
          <div className="col-xl-3 col-sm-4 mb-3">
            <div className="bg-light rounded shadow-sm py-5 px-4">
              <img
                src={yarn}
                alt=""
                width="150"
                height="150"
                className="img-fluid mb-4 img-thumbnail shadow-sm "
              />
              <h5 className="mb-0">Furkan Ayyildiz</h5>
              <span className="small text-uppercase text-muted">
                CEO - Frontend Developer
              </span>
            </div>
          </div>
          <div className="col-xl-3 col-sm-4 mb-3">
            <div className="bg-light rounded shadow-sm py-5 px-4">
              <img
                src={yarn}
                alt=""
                width="150"
                height="150"
                className="img-fluid mb-4 img-thumbnail shadow-sm"
              />
              <h5 className="mb-0">Mustafa Sahin</h5>
              <span className="small text-uppercase text-muted">
                CEO - Backend Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default About;
