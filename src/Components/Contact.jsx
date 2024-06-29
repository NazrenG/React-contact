import { useState } from "react";
import Form from "./Form";
import styled from "./UI/style.module.css";

function Contact() {
  const [contactList, setContactList] = useState([]);

  const addUser = (user) => {
    setContactList((prevContactList) => [...prevContactList, user]);
  };

  const removeButton = (index) => {
    setContactList((prevContactList) =>
      prevContactList.filter((_, i) => i !== index)
    );
  };

  return (
    <div className={styled.contactDiv}>
      <ul>
        {contactList.map((user, index) => (
          <li key={index} className={styled.contactLi}>
            <p>{user.username}</p>
            <p>{user.phone}</p>
            <button onClick={() => removeButton(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <Form addUser={addUser} />
    </div>
  );
}

export default Contact;
