import React, { useState } from "react";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

const Register = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    //create user

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const loggedUser = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const handleEmailChange = (event) => {
    console.log(event);
  };

  const handlePasswordBlur = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="text-center mx-auto mt-5">
      <h1>Register page</h1>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          id="email"
          className="mb-2 mt-3"
          placeholder="Enter Your email"
        />
        <br></br>
        <input
          onBlur={handlePasswordBlur}
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
        />
        <br />
        <input
          type="submit"
          value="Register"
          className="mt-2  btn btn-primary"
        />
      </form>
    </div>
  );
};

export default Register;
