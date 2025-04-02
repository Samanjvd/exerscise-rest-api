import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  let navigate = useNavigate();

  const registerHandler = (event) => {
    event.preventDefault();

    let userInfo = {
      firstName,
      lastName,
      email,
    };

    if (Object.values(userInfo).every(Boolean)) {
      fetch("https://exercise-93691-default-rtdb.firebaseio.com/users.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to save user");
          }
          return response.json();
        })
        .then(() => navigate("/users"))
        .catch((error) => console.error("Error:", error));
    } else {
      console.error("Invalid user data");
    }
  };

  return (
    <div className="w-[360px] bg-white mx-auto custom-shadow p-3 font-Roboto">
      <form
        className="flex flex-col justify-evenly p-3"
        autoComplete="off"
        onSubmit={registerHandler}
      >
        <input
          id="first-name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          className="form-field my-3 p-4 text-base border-none"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        <input
          id="last-name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          className="form-field my-3 p-4 text-base border-none"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />

        <input
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="form-field my-3 p-4 text-base border-none"
          type="text"
          placeholder="Email"
          name="email"
        />
        <button
          className="form-field my-3 p-4 text-base border-none"
          type="submit"
          // onClick={() => navigate("/users")}
        >
          Register
        </button>
      </form>
    </div>
  );
}
