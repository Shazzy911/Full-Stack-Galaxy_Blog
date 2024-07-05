"use client";
import style from "./ContactForm.module.scss";
// import { useForm, SubmitHandler } from "react-hook-form"
// // import { formFields } from "@/json/StaticData";
// import Button from "../buttons/Button";



// const ContactForm = () => {

//   const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       await fetch("http://localhost:3000/api/contact", {
//         method: "POST",
//         body: JSON.stringify(state),
//       })
     

//     } catch (error) {
//       console.log(error, "Error Posting Contact");
//     }
//   };
  
//   const changeHandler = (
//     e: React.ChangeEvent<
//       HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
//     >
//   ) => {
//   };

//   return (
//     <div className={style.container}>
//       <h1 className={style.heading}>Lets Contact Us</h1>
//       <form onSubmit={submitForm} className={style.form}>
//         <div className={style.inputContainer}>
//           <label className={style.label}>First Name</label>
//           <input
//             type='text'
//             placeholder="Robert Lee"
//             onChange={changeHandler}
//             name="firstname"
//           />
//         </div>
//         <div className={style.inputContainer}>
//           <label className={style.label}>Last Name</label>
//           <input
//             type='text'
//             placeholder="Anderson"
//             onChange={changeHandler}
//             name="lastname"
//           />
//         </div>
//         <div className={style.inputContainer}>
//           <label className={style.label}>E-mail Address</label>
//           <input
//             type='text'
//             placeholder="E-mail Address"
//             onChange={changeHandler}
//             name="email"
//           />
//         </div>
//         <div className={style.select}>
//           <label className={style.label}>What this is about</label>
//           <select  onChange={changeHandler} name="selectedOption">
//             <option value="">Select Option</option>
//             <option value="Personal Proposal">Personal Proposal</option>
//             <option value="Business Proposal">Business Purposal</option>
//             <option value="Want to say Hello">Want to say hello</option>
//           </select>
//         </div>
//         <div className={style.messageContainer}>
//           <div className={style.message}>
//             <label className={style.label}>Your message</label>
//             <textarea
//               name="textValue"
//               className={style.textarea}
//               placeholder="Feel free to ask something... send your feedback..."
//               required
//               onChange={changeHandler}
//             ></textarea>

//           </div>
//           <Button text="Send Now" value="submit" href="/contact" />

//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

// ContactForm.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../buttons/Button";
import "./ContactForm.module.scss";

interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  selectedOption: string;
  textValue: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>();

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      // Handle successful submission (e.g., display success message)
    } catch (error) {
      console.error("Error Posting Contact:", error);
    }
  };

  return (
    <div className={style.container}>
      <h1 className={style.heading}>Lets Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.inputContainer}>
          <label className={style.label}>First Name</label>
          <input
            type="text"
            placeholder="Robert Lee"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <span className={style.error}>Required</span>}
        </div>
        <div className={style.inputContainer}>
          <label className={style.label}>Last Name</label>
          <input
            type="text"
            placeholder="Anderson"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && <span className={style.error}>Required</span>}
        </div>
        <div className={style.inputContainer}>
          <label className={style.label}>E-mail Address</label>
          <input
            type="text"
            placeholder="E-mail Address"
            {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
          />
          {errors.email &&
            (errors.email.type === "required" ? (
              <span className={style.error}>Required</span>
            ) : (
              <span className={style.error}>Invalid email format</span>
            ))}
        </div>
        <div className={style.select}>
          <label className={style.label}>What this is about</label>
          <select {...register("selectedOption", { required: true })}>
            <option value="">Select Option</option>
            <option value="Personal Proposal">Personal Proposal</option>
            <option value="Business Proposal">Business Proposal</option>
            <option value="Want to say Hello">Want to say hello</option>
          </select>
          {errors.selectedOption && <span className={style.error}>Required</span>}
        </div>
        <div className={style.messageContainer}>
          <div className={style.message}>
            <label className={style.label}>Your message</label>
            <textarea
              // name="textValue"
              className={style.textarea}
              placeholder="Feel free to ask something... send your feedback..."
              {...register("textValue", { required: true })}
            />
            {errors.textValue && <span className={style.error}>Required</span>}
          </div>
          <Button text="Send Now" value="submit" href="/contact" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
