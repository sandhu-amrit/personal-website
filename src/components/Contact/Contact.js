import React from "react";
import {
  ContactContainer,
  ContactHeading,
  ContactDescription,
  EmailContainer,
  Email,
  LocationContainer,
  Location,
  Links,
  Link,
  StyledEmailIcon,
  StyledLocationIcon,
} from "./ContactStyles";
import ContactForm from "../ContactForm/ContactForm";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactHeading>Contact</ContactHeading>
      <ContactDescription>
        I'm actively looking for any new opportunities, my inbox is always open.
        Whether you have a question or want to hire me or just want to say
        hello, I'll try my best to get back to you!
      </ContactDescription>
      <ContactForm />
      <EmailContainer>
        <StyledEmailIcon />
        <Email>amrit35.sandhu@gmail.com</Email>
      </EmailContainer>
      <LocationContainer>
        <StyledLocationIcon />
        <Location>Toronto, Canada</Location>
      </LocationContainer>
      <Links>
        <Link href="https://github.com">
          <FaGithub />
        </Link>
        <Link href="https://github.com">
          <FaLinkedin />
        </Link>
        <Link href="https://github.com">
          <FaXTwitter />
        </Link>
      </Links>
    </ContactContainer>
  );
};

export default Contact;
