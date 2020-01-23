import React, { Component } from "react";
import girl from "../img/04.jpg";

export default class Landing extends Component {
  render() {
    return (
      <div className="container">
        <main className="d-flex align-items-center justify-content-between">
          <div className="content-left ">
            <h1 className="text-main ">
              ReDefining the <br /> Tradition
            </h1>
            <p className="text-lead mb-5">
              A place of commitment and relation and for bearing <br /> the
              consequences.
            </p>
            <a className="cta btn" href="#">
              Get Started
            </a>
          </div>
          <div className="vl d-none d-lg-block"></div>
          <div className="content-right">
            <img
              style={{
                transform: "matrix(0.97, 0.25, -0.25, 0.97, 0, 0)",
                boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.56)"
              }}
              className="img-fluid mt-5 d-none d-lg-block"
              width="470"
              height="400"
              src={girl}
              alt="image"
            />
          </div>
        </main>
        <section id="goals">
          <h3>The process</h3>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </p>
        </section>
        <section id="goals">
          <h3>About us</h3>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </p>
        </section>
        <section id="goals">
          <h3>Contact us</h3>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </p>
        </section>
      </div>
    );
  }
}
