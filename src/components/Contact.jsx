import React from "react";
import github from "../assets/github.png";
import envelope from "../assets/envelope.png";
import linkedin from "../assets/linkedin.png";

export default function Contact() {
  const email = "stephanie.terese@gmail.com";

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
  };


  return (
    <section id="contact">
      <div className="contact-container">
        <div className="center-text">
          <h2>c o n t a c t</h2>
        </div>
        <div className="icon-container">
          <a href="https://github.com/stephanie-115" className="icon-link">
            <img src={github} className="icon" alt="GitHub" />
          </a>

          <a href={`mailto:${email}`} className="icon-link">
            <img src={envelope} className="icon" alt="Email" />
          </a>

          <a
            href="https://www.linkedin.com/in/stephanie-t-serrano/"
            className="icon-link"
          >
            <img src={linkedin} className="icon" alt="LinkedIn" />
          </a>
        </div>
        <form
          className="contact-us-form"
          id="contactUsForm"
          onSubmit={handleSubmit}
        >
          <div className="input-row">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="n a m e"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="e m a i l"
              required
            />
          </div>
          <textarea
            id="message"
            name="message"
            placeholder="m e s s a g e"
            required
          ></textarea>
          <button type="submit">s e n d</button>
        </form>
      </div>
    </section>
  );
}
