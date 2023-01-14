import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button, Input } from "@mui/material";
import Aos from "aos";

import "../Style/contact.css";
function ContactForm() {
  const [show, setShow] = React.useState(false);
  const [state, handleSubmit] = useForm("xyyayvwe");

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  if (state.succeeded) {
    return (
      <>
        {" "}
        <div
          id="formsub"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="100"
          style={{ textAlign: "center" }}
        >
          <img
            width={300}
            src="https://png.pngtree.com/png-vector/20230105/ourmid/pngtree-3d-green-check-mark-icon-png-image_6552255.png"
            alt=""
          />
          <h1>
            Thanks for Filling Up the Form <br /> We will Contact You Soon!
          </h1>
        </div>
      </>
    );
  }

  return (
    <section id="contact">
      <div
        id="tech"
        data-aos="fade-down-right"
        data-aos-duration="2000"
        data-aos-delay="300"
        margin={"auto"}
        justifyContent={"space-around"}
      >
        <h1 style={{ color: "var(--color-font)" }}>Contact Me </h1>
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-offset="100"
        id="contactform"
      >
        {/*   <i class="fa-sharp fa-solid fa-location-pin"></i>{" "}    <i class="fa-solid fa-envelope"></i>*/}
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-offset="100"
        id="contactlinkdiv">
        <div className="Email">
            <div >
              {" "}
              <i class="fa-solid fa-envelope"></i>{" "}
            </div>

            <h3>Email </h3>
            <h3>deotadayal27@gmail.com</h3>
            <a href="mailto:deotadayal27@gmail.com">
              <h3> Email Now ! </h3>
            </a>
          </div>
          <div className="whatsapp">
            <div >
              {" "}
              <i class="fa-sharp fa-solid fa-phone"></i>{" "}
            </div>

            <h3>Phone Call</h3>
            <h3>+91 8264121428</h3>
            <a href="tel:918264121428">
              <h3> Call Now ! </h3>
            </a>
          </div>
          <div className="call">
            <div >
              {" "}
              <i class="fa-brands fa-square-whatsapp"></i>
            </div>
            <h3>Whatsapp</h3>
            <h3>+91 8264121428</h3>
            <a href="https://wa.me/918264121428">
              {" "}
              <h3>Whatsapp Now ! </h3>
            </a>
          </div>
          <div id="socialgit" >
            <a target="blank" href="https://github.com/HANUMAT-SHARAN">
              {" "}
              <i class="fa-brands fa-github"></i>
            </a>

            <a
              target="blank"
              href="https://www.linkedin.com/in/hanumat-sharan-168548258/"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="100"
        >
          <form onSubmit={handleSubmit}>
            <h4>Your Name </h4>
            <input id="name" placeholder="Insert Your Name" name="Name" />
            <h4>Email Address</h4>
            <input
              id="email"
              placeholder="Insert Your Email"
              type="email"
              name="Email"
            />

            <h4>Mobile Number</h4>
            <input id="mobile" placeholder="+91" type="number" name="Mobile" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <h4>Message</h4>
            <input
              placeholder=" Insert Your Message"
              style={{ paddingTop: "10px", paddingBottom: "90px" }}
              id="message"
              type="text"
              name="Message"
            />

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <div id="formbu">
              <button type="submit" disabled={state.submitting}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
