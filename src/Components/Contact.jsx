import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button, Input } from "@mui/material";

import "../Style/contact.css";
function ContactForm() {
  const [state, handleSubmit] = useForm("xyyayvwe");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
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
      <div id="contactform">
        <div>
        <div>
           
           <h1 style={{fontSize:"30px"}}>Contact</h1>
         </div>
          <div>
           
            <h4>Fill Up The Form To Contact</h4>
          </div>
          <div>
            <h4>
              {" "}
              <i class="fa-sharp fa-solid fa-phone"></i>
              {"    "}+91-8264121428
            </h4>
          </div>
          <div>
            <h4>
              <i class="fa-solid fa-envelope"></i>
              {"    "}deotadayal@gmail.com
            </h4>
          </div>
          <div>
            <h4>
              {" "}
              <i class="fa-sharp fa-solid fa-location-pin"></i>{" "}
              <span>{"  "}</span> Punjab,India
            </h4>
          </div>
          <div id="sociallinks">
            <a href="https://github.com/HANUMAT-SHARAN">
              {" "}
              <i class="fa-brands fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/hanumat-sharan-168548258/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <h4>Your Name </h4>
            <input id="name" placeholder="Hanumat Sharan" name="Name" />
            <h4>Email Address</h4>
            <input
              id="email"
              placeholder="zyz@gmail.com"
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
            <input id="message" type="text" name="Message" />

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
