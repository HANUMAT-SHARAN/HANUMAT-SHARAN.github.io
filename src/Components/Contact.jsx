import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button, Input } from "@mui/material";
import Aos from "aos";
import lock from "../Components/Audio/lock.mp3"
import "../Style/contact.css";
function ContactForm() {
  const [show,setShow]=React.useState(false)
  const [state, handleSubmit] = useForm("xyyayvwe");
  function locksound() {
    new Audio(lock).play();
  }
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  if (state.succeeded) {
    
    return <> <div
    
    id="formsub"
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
    data-aos-offset="100"
    style={{ textAlign: "center"}}
  >
    <img
      width={300}
      src="https://png.pngtree.com/png-vector/20230105/ourmid/pngtree-3d-green-check-mark-icon-png-image_6552255.png"
      alt=""
    />
    <h1>Thanks for Filling Up the Form <br /> We will Contact You Soon!</h1>
  </div> 
  </>
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
      <div  data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-offset="100" id="contactform"  
    
  >
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-offset="100" >
          <div>
            <h1 style={{ fontSize: "30px" }}>Contact</h1>
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
              deotadayal@gmail.com
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
            <a onClick={locksound} target="blank" href="https://github.com/HANUMAT-SHARAN">
              {" "}
              <i class="fa-brands fa-github"></i>
            </a>

            <a onClick={locksound} target="blank" href="https://www.linkedin.com/in/hanumat-sharan-168548258/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-offset="100" >
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
              <button onClick={locksound} type="submit" disabled={state.submitting}>
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="100"
          style={{ textAlign: "center",display:show?"block":"none" }}
        >
          <img
            width={300}
            src="https://png.pngtree.com/png-vector/20230105/ourmid/pngtree-3d-green-check-mark-icon-png-image_6552255.png"
            alt=""
          />
          <h1>Thanks for Filling Up the Form We will Contact You Soon!</h1>
        </div>  */}
      </div>
    </section>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
