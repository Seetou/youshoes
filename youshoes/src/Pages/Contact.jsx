import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BsFillTelephoneFill,
  BsEnvelopeOpenFill,
  BsGeoAltFill,
  BsInstagram,
  BsTiktok,
} from "react-icons/bs";

const Contact = () => {
  const [userContactUs, setUserContactUs] = useState({
    userfirstname: "",
    userlastname: "",
    useremail: "",
    userphone: "",
    usermessage: "",
  });

  const [messageSent, setMessageSent] = useState(false);

  const formRef = useRef();

  const inputChange = (e) => {
    setUserContactUs({ ...userContactUs, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    formRef.current.reset();
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 3000);
  };
  return (
    <ContactWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="section-title">
        <h1>Contact Us</h1>
        <h2>Any question? Just write us a message!</h2>
      </div>
      <div className="contact__container">
        <div className="contact-information">
          <div className="contact-information-header">
            <h2>Contact Information</h2>
            <h3>
              Fill up the form and our Team will get back to you within 24
              hours.
            </h3>
          </div>
          <div className="contact-information-content">
            <ul>
              <li>
                <BsFillTelephoneFill />
                <h4>+90 543 658 684</h4>
              </li>
              <li>
                <BsEnvelopeOpenFill />
                <h4>hello@youshoes.com</h4>
              </li>
              <li>
                <BsGeoAltFill />
                <h4>102 Street 2714 Canada</h4>
              </li>
            </ul>
          </div>
          <div className="contact-information-social">
            <Link>
              <BsTiktok />
            </Link>
            <Link>
              <BsInstagram />
            </Link>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={formSubmit} ref={formRef}>
            <div className="user-infos">
              <div>
                <label htmlFor="userfirstname">First Name</label>
                <br />
                <input
                  type="text"
                  maxLength="10"
                  name="userfirstname"
                  required
                  onChange={inputChange}
                />
              </div>
              <div>
                <label htmlFor="userlastname">Last Name</label>
                <br />
                <input
                  type="text"
                  maxLength="10"
                  name="userlastname"
                  required
                  onChange={inputChange}
                />
              </div>
            </div>
            <div className="user-contact">
              <div>
                <label htmlFor="usermail">Mail</label>
                <br />
                <input
                  type="email"
                  name="useremail"
                  required
                  onChange={inputChange}
                />
              </div>
              <div>
                <label htmlFor="userphone">Phone</label>
                <br />
                <input type="tel" name="userphone" onChange={inputChange} />
              </div>
            </div>
            <div className="user-message">
              <label htmlFor="usermessage">Message</label>
              <br />
              <textarea
                className="form-message-box"
                name="usermessage"
                id=""
                cols="30"
                rows="5"
                placeholder="Write your message..."
                required
                onChange={inputChange}
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
            {messageSent && (
              <div className="messageConfirmBox">
                <h3>Your message has been sent. Thank you!</h3>
              </div>
            )}
          </form>
        </div>
      </div>
    </ContactWrapper>
  );
};

export default Contact;

const ContactWrapper = styled(motion.section)`
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  padding-top: 5rem;

  .section-title {
    width: 100%;
    text-align: center;
    margin-bottom: 3rem;
    margin-top: 3rem;

    h1 {
      font-size: 3rem;
      font-weight: 600;
    }

    h2 {
      font-weight: 400;
    }
  }

  .contact__container {
    width: 80%;
    margin: 0 auto;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    /* background: var(--header-clr); */
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    max-width: 1920px;

    .contact-information {
      width: 100%;
      padding: 2rem;
      background: var(--accent-clr);
      border-radius: 5px;
      .contact-information-header {
        h2 {
          font-size: 2.5rem;
          font-weight: 400;
          color: var(--header-black-clr);
        }

        h3 {
          margin-top: 1rem;
          font-size: 1rem;
          font-weight: 200;
          color: var(--header-black-clr);
        }
      }

      .contact-information-content {
        ul {
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;

          li {
            display: flex;
            gap: 1rem;
            align-items: center;
            list-style: none;

            svg {
              font-size: 1.2rem;
              color: var(--secondary-clr);
            }

            h4 {
              font-size: 1.1rem;
              font-weight: 300;
              color: var(--header-black-clr);
            }
          }
        }
      }

      .contact-information-social {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 4rem;
        gap: 1.5rem;

        a {
          color: var(--header-clr);
          border-radius: 50%;
          transition: all 0.2s ease-in-out;
          padding: 0.5rem;
          background: var(--secondary-clr);
          display: flex;
          align-items: center;

          svg {
            font-size: 1rem;
          }

          &:hover {
            color: var(--secondary-clr);
            background: var(--header-clr);
          }
        }
      }
    }

    .contact-form {
      width: 100%;

      form {
        width: 100%;
        padding: 1rem;
        .user-infos label,
        .user-contact label,
        .user-message label {
          width: 100%;
          font-size: 0.8rem;
          font-weight: 400;
          color: var(--header-black-clr);
        }

        .user-infos input::placeholder,
        .user-contact input::placeholder,
        .form-message-box::placeholder,
        .form-message-box {
          font-family: var(--font-family);
        }

        .user-message label {
          display: block;
          margin-top: 2rem;
        }

        .user-infos input {
          margin-bottom: 2rem;
        }

        .form-message-box {
          resize: none;
        }

        .user-infos input,
        .user-contact input,
        .form-message-box {
          outline: none;
          width: 100%;
          padding: 0.5rem;
          font-weight: 300;
          border: none;
          background: transparent;
          border-bottom: 2px solid var(--primary-clr);

          &:focus {
            border-bottom: 2px solid var(--secondary-clr);
          }
        }

        .user-infos,
        .user-contact {
          display: grid;
          column-gap: 2rem;
          grid-template-columns: repeat(2, 1fr);
          justify-content: center;
        }

        button {
          padding: 0.8rem 2rem;
          font-weight: 600;
          margin-top: 1rem;
          border-radius: 50px;
          background: var(--primary-clr);
          border: none;
          cursor: pointer;
          transition: all 0.2s ease-in-out;

          &:hover {
            background: var(--secondary-clr);
            color: var(--header-clr);
          }
        }

        .messageConfirmBox {
          background: #b7e4c7;
          padding: 0.5rem;
          border-radius: 5px;
          margin-top: 1rem;
          h3 {
            font-weight: 300;
            font-style: italic;
          }
        }
      }
    }
  }

  @media screen and (min-width: 50em) and (max-width: 75em) {
    .contact__container {
      width: 95%;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 49.875em) {
    .contact__container {
      width: 95%;
      flex-direction: column;
      margin-bottom: 5rem;

      .contact-information {
        height: 100%;
        .contact-information-header {
          text-align: center;
          h2 {
            font-size: 2rem;
          }
        }

        .contact-information-content {
          ul {
            li {
              flex-direction: column;
            }
          }
        }

        .contact-information-social {
          justify-content: center;
        }
      }

      .contact-form {
        height: 100%;
        form {
          .user-infos,
          .user-contact {
            display: flex;
            flex-direction: column;
          }

          .user-contact {
            gap: 2rem;
          }
        }
      }
    }
  }
`;
