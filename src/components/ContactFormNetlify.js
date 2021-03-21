import React, { useState, useEffect } from "react";
// import axios from "axios";

function ContactFormNetlify() {
  /* NEW: validation for inputs vvvv */
  const [fieldErrors, setFieldErrors] = useState({});
  // Input Change Handling
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: ""
  });

  const validationRules = {
    email: val => val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    message: val => !!val
  };
  const validate = () => {
    let errors = {};
    let hasErrors = false;
    for (let key of Object.keys(inputs)) {
      errors[key] = !validationRules[key](inputs[key]);
      hasErrors |= errors[key];
    }
    setFieldErrors(prev => ({ ...prev, ...errors }));
    return !hasErrors;
  };
  const renderFieldError = field => {
    if (fieldErrors[field]) {
      return <p className="errorMsg pl-2 text-danger">Please enter a valid {field}.</p>;
    }
  };
  useEffect(() => {
    // Only perform interactive validation after submit
    if (Object.keys(fieldErrors).length > 0) {
      validate();
    }
  }, [inputs]);
  /* End new validation ^^^^ */


  const handleOnChange = event => {
    event.persist();
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value
    }));
  };

  return (
    <form
      className="contact1-form validate-form"
      name="contact-form v1"
      method="POST"
      data-netlify="true"
      action="/form-submission-successful"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact-form v1" />
      <span className="contact1-form-title">
        Get in touch
        </span>
      <div className="wrap-input1 validate-input">
        <input
          className="input1"
          id="name"
          type="text"
          name="name"
          onChange={handleOnChange}
          value={inputs.name}
          placeholder="Name"
          required
        />
        {renderFieldError("email")}
        <span className="shadow-input1"></span>
      </div>
      <div className="wrap-input1 validate-input">
        <input
          className="input1"
          id="email"
          type="email"
          name="email"
          onChange={handleOnChange}
          value={inputs.email}
          placeholder="Email"
          required
        />
        {renderFieldError("email")}
        <span className="shadow-input1"></span>
      </div>
      <div className="wrap-input1 validate-input" data-validate="Message is required">
        <textarea
          id="message"
          name="message"
          className="input1"
          placeholder="Message"
          onChange={handleOnChange}
          value={inputs.message}
          required
        ></textarea>
        {renderFieldError("message")}
        <span className="shadow-input1"></span>
      </div>

      <div className="container-contact1-form-btn">
        <button className="contact1-form-btn" type="submit">
          <span>
            Send Email
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </span>
        </button>
      </div>

    </form>

  );
};

export default ContactFormNetlify