import React from "react";

const Footer = () => {
  return (
    <footer>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
      />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />

      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.0/css/mdb.min.css"
        rel="stylesheet"
      />

      <footer className="page-footer bg-dark">
        <div className="bg-danger">
          <div className="container">
            <div className="row py-4 d-flex align-items-center">
              <div className="col-md-12 text-center">
                <a href="#">
                  <i className="fab fa-facebook-f white-text mr-4"> </i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter white-text mr-4"> </i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in white-text mr-4"> </i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram white-text"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center text-md-left mt-5">
          <div className="row">
            <div className="col-md-2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Products</h6>
              <hr
                className="bg-danger mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 85, height: 5 }}
              />

              <ul className="list-unstyled">
                <li className="my-2">
                  <a href="#">Fabric</a>
                </li>
                <li className="my-2">
                  <a href="#">Yarns</a>
                </li>
                <li className="my-2">
                  <a href="#">Dressers</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Useful links</h6>
              <hr
                className="bg-danger mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 110, height: 5 }}
              />
              <ul className="list-unstyled">
                <li className="my-2">
                  <a href="#">Home</a>
                </li>
                <li className="my-2">
                  <a href="#">About</a>
                </li>
                <li className="my-2">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              <hr
                className="bg-danger mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 75, height: 5 }}
              />
              <ul className="list-unstyled">
                <li className="my-2">
                  <i className="fas fa-home mr-3"></i> Ataturk Neighbourhood
                  Fatih Street No:571 Sariyer/IST
                </li>
                <li className="my-2">
                  <i className="fas fa-envelope mr-3"></i>{" "}
                  furkan199905@gmail.com
                </li>
                <li className="my-2">
                  <i className="fas fa-phone mr-3"></i> + 09 212 444 33 22
                </li>
                <li className="my-2">
                  <i className="fas fa-print mr-3"></i> + 09 212 666 55 11
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          <p>&copy; Copyright FuMu Textie {new Date().getFullYear()}</p>
        </div>
      </footer>

      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
      ></script>

      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"
      ></script>

      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"
      ></script>

      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.0/js/mdb.min.js"
      ></script>
    </footer>
  );
};

export default Footer;
