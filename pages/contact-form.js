import styles from "../styles/contact-form.module.css";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xqkwlonj");

  if (state.succeeded) {
    return <p>Thanks for messaging us, we will get back to you shortly</p>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.label}>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" id="name" name="name" />
          <br />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className={styles.label}>
          <label for="topic">Topic</label>
          <br />
          <input type="text" id="topic" name="topic" />
          <br />
          <ValidationError prefix="Topic" field="topic" errors={state.errors} />
        </div>
        <div className={styles.label}>
          <label for="message" className={styles.label}>
            Message
          </label>
          <br />
          <textarea id="message" name="message" className={styles.message} />
          <br />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className={styles.label}>
          <button
            type="submit"
            disabled={state.submitting}
            className={styles.button}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
