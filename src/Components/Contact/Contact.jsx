import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = ({ darkmode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(process.env.BACKEND_URI + "/data", {
        name,
        email,
        message,
      });

      setIsLoading(false);
      console.log(response.data);

      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message sent successfully!", {
        position: "bottom-right",
        autoClose: 2000,
      });
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      toast.error("Error sending message. Please try again later.", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className={`contact ${darkmode ? "darkmode" : ""}`} id="Contact">
      <div className={`${darkmode ? "about-line" : ""}`}></div>
      <div className="cleft">
        Get in <span>Touch</span>
      </div>
      <div className="container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group capitalise-name">
            <label htmlFor="name" className="form-label">
              Enter Your Name
            </label>
            <input
              type="text"
              id="name"
              className="contact-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Enter Your Email
            </label>
            <input
              type="email"
              id="email"
              className="contact-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Enter Your Message
            </label>
            <textarea
              id="message"
              className="contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send"}
          </button>
          <ToastContainer className="toast-container" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
