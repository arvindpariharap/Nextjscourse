import React from "react";
import styles from "../styles/Contact.module.css";
import { useState } from "react";

const Contact = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [desc, setdesc] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, phone, email, desc);

    const data = { name, phone, email, desc };

    fetch("http://localhost:3000/api/postcontact/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        alert("Thanks for contacting us");
        setname("");
        setphone("");
        setemail("");
        setdesc("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setname(e.target.value);
    } else if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "desc") {
      setdesc(e.target.value);
    }
    console.log(e, "Change");
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.contacth1}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label for="exampleInputName1" className={styles.formlabel}>
            Name
          </label>
          <input
            className={styles.input}
            type="name"
            name="name"
            value={name}
            onChange={handleChange}
            id="exampleInputname1"
            aria-describedby="nameHelp"
            placeholder="Enter Your Name"
          />
        </div>
        <div className={styles.mb3}>
          <label for="exampleInputphone1" className={styles.formlabel}>
            Phone
          </label>
          <input
            className={styles.input}
            type="text"
            name="phone"
            value={phone}
            onChange={handleChange}
            id="exampleInputPhone1"
            aria-describedby="phoneHelp"
            placeholder="Enter Phone Number"
          />
        </div>

        <div className={styles.mb3}>
          <label for="exampleInputEmail1" className={styles.formlabel}>
            Email address
          </label>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className={styles.mb3}>
          <label for="exampleInputPassword1" className={styles.formlabel}>
            Password
          </label>
          <input
            className={styles.input}
            type="password"
            name="password"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className={styles.mb3}>
          <label for="exampleInputdesc1" className={styles.formlabel}>
            Description
          </label>
          <textarea
            className={styles.input}
            type="s=desc"
            name="desc"
            value={desc}
            onChange={handleChange}
            id="exampleInputDesc1"
            aria-describedby="descHelp"
            placeholder="Description"
          ></textarea>
        </div>
        <button type="submit" class={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
