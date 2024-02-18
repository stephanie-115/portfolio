import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import github from "../assets/github.png";
import envelope from "../assets/envelope.png";
import linkedin from "../assets/linkedin.png";
import { Reveal } from "./Reveal";

//formspree
function ContactForm() {
  const email = "stephanie.terese@gmail.com";
  const [state, handleSubmit] = useForm("xdoqgljn");

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="center-text">
          <h2>c o n t a c t</h2>
        </div>
        <div className="icon-container">
          <a
            href="https://github.com/stephanie-115"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} className="icon" alt="GitHub" />
          </a>

          <a
            href={`mailto:${email}`}
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={envelope} className="icon" alt="Email" />
          </a>

          <a
            href="https://www.linkedin.com/in/stephanie-t-serrano/"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              className="icon"
              alt="LinkedIn"
            />
          </a>
        </div>
        {state.succeeded ? (
          <h2 className="center-text">
            m e s s a g e <br />s e n t !
          </h2>
        ) : (
          <form onSubmit={handleSubmit} className="contact-us-form">
            <label htmlFor="name"></label>
            <div className="input-row">
              <input id="name" type="text" name="name" placeholder="n a m e" />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="e m a i l"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <textarea id="message" name="message" placeholder="m e s s a g e" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              s u b m i t
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
