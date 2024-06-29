import { useState } from "react";
import styled from "./UI/style.module.css";

function Form({ addUser }) {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim() && phone.trim()) {
      addUser({
        username: username,
        phone: phone,
      });
      setUsername("");
      setPhone("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styled.contactForm}>
      <label>
        Name:
        <input
          type="text"
          className={styled.Inputs}
          placeholder="Enter your name..."
          value={username}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          className={styled.Inputs}
          placeholder="Enter your phone..."
          value={phone}
          onChange={handlePhoneChange}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
