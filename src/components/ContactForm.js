import React, { useState, useEffect } from "react";
import axios from "axios";

function ContactForm() {
  /* NEW: validation for inputs vvvv */
  const [fieldErrors, setFieldErrors] = useState({});
  // Input Change Handling
  const [inputs, setInputs] = useState({
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

  // Server State Handling
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      setFieldErrors({});
      setInputs({
        email: "",
        message: ""
      });
    }
  };
  const handleOnSubmit = event => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    setServerState({ submitting: true });
    axios({
      method: "POST",
      // url: "https://formspree.io/f/xbjpnaye",
      url: "https://formspree.io/f/mjvjbkow",  // Godaddy email
      data: inputs
    })
      .then(r => {
        handleServerResponse(true, "Thanks! We will come back to you in a maximum of 48 hours.");
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error);
      });
  };

  return (
    <form className="contact1-form validate-form" onSubmit={handleOnSubmit} noValidate>
      {serverState.status && (
        <h5 className={!serverState.status.ok ? "errorMsg" : "text-center text-success font-weight-bold pb-3"}>
          {serverState.status.msg}
        </h5>
      )}

      <span className="contact1-form-title">
        Get in touch
        </span>

      {/* <div className="wrap-input1 validate-input" data-validate="Name is required">
          <input
            className="input1"
            id="name"
            type="name"
            name="name"
            onChange={handleOnChange}
            value={inputs.email}
            // className={fieldErrors.email ? "error" : ""}
            placeholder="Name" />
          {renderFieldError("name")}
          <span className="shadow-input1"></span>
        </div> */}

      <div className="wrap-input1 validate-input">
        <input
          className="input1"
          id="email"
          type="email"
          name="email"
          onChange={handleOnChange}
          value={inputs.email}
          // className={fieldErrors.email ? "error" : ""}
          placeholder="Email"
        />
        {renderFieldError("email")}
        <span className="shadow-input1"></span>
      </div>

      {/* <div className="wrap-input1 validate-input">
          <input
            className="input1"
            id="subject"
            type="text"
            name="subject"
            onChange={handleOnChange}
            value={inputs.email}
            // className={fieldErrors.email ? "error" : ""}
            placeholder="Subject" />
          {renderFieldError("subject")}
          <span className="shadow-input1"></span>
        </div> */}

      <div className="wrap-input1 validate-input" data-validate="Message is required">
        <textarea
          id="message"
          name="message"
          className="input1"
          placeholder="Message"
          onChange={handleOnChange}
          value={inputs.message}
        // className={fieldErrors.message ? "error" : ""}
        ></textarea>
        {renderFieldError("message")}
        <span className="shadow-input1"></span>
      </div>


      <div className="container-contact1-form-btn">
        <button className="contact1-form-btn" type="submit" disabled={serverState.submitting}>
          <span>
            Send Email
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </span>
        </button>
      </div>

    </form>

  );
};

export default ContactForm