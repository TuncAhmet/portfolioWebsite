import { Container, Row, Col } from "react-bootstrap";
import { useRef, useState } from 'react'
import contactMe from "../assets/img/contact-me-img.webp";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [send, setSend] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ei700pc",
        "template_lyxpecj",
        form.current,
        "DnqASLxh6B1qV7SFq"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setSend(true)
        },
        (error) => {
          console.log(error.text);
          setSend(false)
        }
      );
  };


  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactMe} alt="contact"></img>
          </Col>
          <Col size={12} md={6}>
            <h2>Contact Me</h2>
            <form onSubmit={sendEmail} ref={form}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input
                    name="first_name"
                    type="text"
                    placeholder="First Name"
                    required
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input name="last_name" type="text" placeholder="Last Name" required/>
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input name="tel" type="tel" placeholder="Phone No." />
                </Col>
                <Col size={12} className="px-1">
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                  <button id="submit" name="submit" type="submit">
                    {/* !Status! */}
                    <span>{send ? "your message has arrived" : "Send Me"}</span> 
                  </button>
                </Col>
                {/* {status.message && <Col></Col>} */}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
