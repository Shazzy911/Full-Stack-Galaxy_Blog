"use client";
import React, { useReducer, useState } from "react";
import style from "./ContactForm.module.scss";
// import { formFields } from "@/json/StaticData";
import Button from "../buttons/Button";
import { INITIAL_VALUE, formReducer } from "@/utils/formReducer";


const ContactForm = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_VALUE)

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        body: JSON.stringify(state),
      })
     

    } catch (error) {
      console.log(error, "Error Posting Contact");
    }
    dispatch({ type: 'VALUE_SUBMIT', payload:{value: INITIAL_VALUE } });
  };
  
  const changeHandler = (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
    >
  ) => {
    dispatch({ type: "CHANGE_INPUT", payload: { name: e.target.name, value: e.target.value } })
  };

  return (
    <div className={style.container}>
      <h1 className={style.heading}>Lets Contact Us</h1>
      <form onSubmit={submitForm} className={style.form}>
        <div className={style.inputContainer}>
          <label className={style.label}>First Name</label>
          <input
            type='text'
            placeholder="Robert Lee"
            onChange={changeHandler}
            name="firstname"
          />
        </div>
        <div className={style.inputContainer}>
          <label className={style.label}>Last Name</label>
          <input
            type='text'
            placeholder="Anderson"
            onChange={changeHandler}
            name="lastname"
          />
        </div>
        <div className={style.inputContainer}>
          <label className={style.label}>E-mail Address</label>
          <input
            type='text'
            placeholder="E-mail Address"
            onChange={changeHandler}
            name="email"
          />
        </div>
        <div className={style.select}>
          <label className={style.label}>What this is about</label>
          <select  onChange={changeHandler} name="selectedOption">
            <option value="">Select Option</option>
            <option value="Personal Proposal">Personal Proposal</option>
            <option value="Business Proposal">Business Purposal</option>
            <option value="Want to say Hello">Want to say hello</option>
          </select>
        </div>
        <div className={style.messageContainer}>
          <div className={style.message}>
            <label className={style.label}>Your message</label>
            <textarea
              name="textValue"
              className={style.textarea}
              placeholder="Feel free to ask something... send your feedback..."
              required
              onChange={changeHandler}
            ></textarea>

          </div>
          <Button text="Send Now" value="submit" href="/contact" />

        </div>
      </form>
    </div>
  );
};

export default ContactForm;

