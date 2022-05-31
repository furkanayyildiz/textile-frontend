import React from "react";
import Card from "../UI/Card/Card";
const Contact = () => {
  return (
    <Card>
      <div className="container">
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
          href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css"
          rel="stylesheet"
        />

        <section className="mb-4">
          <h2 className="h1-responsive font-weight-bold text-center ">
            Contact Us
          </h2>

          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form id="contactform">
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" name="name" className="form-control" />
                      <label htmlFor="name">Name-Surname</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        type="text"
                        name="message"
                        rows="3"
                        className="form-control md-textarea"
                      ></textarea>
                      <label htmlFor="message">Your Message</label>
                    </div>
                  </div>
                </div>

                <div className="text-center text-md-left">
                  <button className="btn btn-primary" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>

            <div className="col-md-3 text-center text-primary">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                  <p className="text-dark">
                    Ataturk Neighbourhood Fatih Street No:571 Sariyer/IST
                  </p>
                </li>

                <li>
                  <i className="fas fa-phone mt-4 fa-2x"></i>
                  <p className="text-dark">+09 212 111 22 33</p>
                </li>

                <li>
                  <i className="fas fa-envelope mt-4 fa-2x"></i>
                  <p className="text-dark">fumutextile@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Card>
  );
};

export default Contact;
