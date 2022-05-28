import React from "react";
import Card from "../UI/Card/Card";
const Contact = () => {
  return (
    <Card>
      <div class="container">
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

        <section class="mb-4">
          <h2 class="h1-responsive font-weight-bold text-center ">
            Contact Us
          </h2>

          <div class="row">
            <div class="col-md-9 mb-md-0 mb-5">
              <form id="contactform">
                <div class="row">
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input type="text" name="name" class="form-control" />
                      <label for="name">Name-Surname</label>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input type="text" name="email" class="form-control" />
                      <label for="email">Email</label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <input type="text" name="subject" class="form-control" />
                      <label for="subject">Subject</label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form">
                      <textarea
                        type="text"
                        name="message"
                        rows="3"
                        class="form-control md-textarea"
                      ></textarea>
                      <label for="message">Your Message</label>
                    </div>
                  </div>
                </div>

                <div class="text-center text-md-left">
                  <button class="btn btn-primary" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>

            <div class="col-md-3 text-center text-primary">
              <ul class="list-unstyled mb-0">
                <li>
                  <i class="fas fa-map-marker-alt fa-2x"></i>
                  <p class="text-dark">
                    Ataturk Neighbourhood Fatih Street No:571 Sariyer/IST
                  </p>
                </li>

                <li>
                  <i class="fas fa-phone mt-4 fa-2x"></i>
                  <p class="text-dark">+09 212 111 22 33</p>
                </li>

                <li>
                  <i class="fas fa-envelope mt-4 fa-2x"></i>
                  <p class="text-dark">fumutextile@gmail.com</p>
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
