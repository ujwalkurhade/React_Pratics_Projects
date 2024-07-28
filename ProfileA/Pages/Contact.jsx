import React from "react";
import "./Contact.css";

function Contact() {
  return (
    // <div>
    //  <div class="container">
    //     <Input class="data" placeholder="Full Name"></Input>
    //     <Input  class="data" placeholder="Email"></Input></br>
    //     <Input class="data"  placeholder="Mobile Number"></Input>
    //     <Input class="data"  placeholder="Subject"></Input></br>
    //     <Input class="M-data" placeholder="Message"></Input>
    //     <div class="btn">
    //       <button class="sendbtn">Send</button>
    //     </div>
    // </div>
    // </div>
    <div className="contact">
      <div className="container">
        <input className="data" placeholder="fullName" />
        <input className="data" placeholder="Email" />
        <input
          className="data"
          placeholder="Mobile Number"
        />
        <input className="data" placeholder="Subject" />
        <input className="M-data" placeholder="message" />
        <div>
          <button className="sendbtn">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
