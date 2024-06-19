import React, { useState } from "react";
// import emailjs from "emailjs-com";
import {
  ContactFormContainer,
  NameAndEmailContainer,
  FormGroup,
  Input,
  Label,
  TextArea,
  SubmitButtonContainer,
  SubmitButton,
  StyledSendIcon
} from "./ContactFormStyles";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  //   const [isSubmitted, setIsSubmitted] = useState(false);
  //   const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();

  //     emailjs
  //       .sendForm(
  //         "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
  //         "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
  //         event.target, // The form element
  //         "YOUR_USER_ID" // Replace with your EmailJS user ID
  //       )
  //       .then((result) => {
  //         console.log(result.text);
  //         setIsSubmitted(true);
  //         setErrorMessage("");
  //       })
  //       .catch((error) => {
  //         console.error(error.text);
  //         setErrorMessage("Error sending email. Please try again later.");
  //       });
  //   };

  return (
    <ContactFormContainer>
      <NameAndEmailContainer>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </FormGroup>
      </NameAndEmailContainer>
      <FormGroup>
        <Label htmlFor="message">Message</Label>
        <TextArea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message...."
          required
        />
      </FormGroup>
      <SubmitButtonContainer>
        <SubmitButton type="submit">
          Send
          <StyledSendIcon />
        </SubmitButton>
      </SubmitButtonContainer>
    </ContactFormContainer>
  );
};

export default ContactForm;
