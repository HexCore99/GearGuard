import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SignUp.module.css";
function SignUp({ setActiveAuthForm }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleName(name) {
    setName(name);
  }
  function handleEmail(email) {
    setEmail(email);
  }
  function handlePassword(pass) {
    setPassword(pass);
  }

  function handleConfirmPassword(confPass) {
    setConfirmPassword(confPass);
  }

  return (
    <div className={styles.formCard}>
      <div className={styles.formHeader}>
        <h2>Create your GearGuard account!</h2>
        <p>
          Register with your university email to request gear, track your
          rentals, and keep your lab equipment in play.
        </p>
      </div>

      <form action="submit" className={styles.form}>
        <label htmlFor="name">FullName</label>
        <input
          id="name"
          type="text"
          value={name}
          placeholder="Enter your Full Name"
          required
          onChange={(e) => handleName(e.target.value)}
        />
        <label htmlFor="email">Enter your email</label>
        <input
          id="email"
          type="email"
          value={email}
          placeholder="info@bscse.uiu.ac.bd"
          required
          onChange={(e) => handleEmail(e.target.value)}
        />

        <label htmlFor="password">Enter your password</label>
        <input
          id="password"
          type="password"
          value={password}
          placeholder="Create a Password"
          required
          onChange={(e) => handlePassword(e.target.value)}
        />

        <label htmlFor="confirmPass">Confirm Password</label>
        <input
          id="confirmPass"
          type="password"
          value={confirmPassword}
          placeholder="Re-Enter your Password"
          required
          onChange={(e) => handleConfirmPassword(e.target.value)}
        />

        <div className={styles.policySection}>
          <div className={styles.checkbox}>
            <input type="checkbox" required />
            <span>Agree to the terms</span>
          </div>
          <NavLink to="/about" className={styles.readPolicies}>
            Read Policies
          </NavLink>
        </div>
        <button type="submit" className={styles.primaryBtn}>
          Create Account
        </button>
        <div className={styles.alreadyHaveAccount}>
          <label> Already In GearGuard?</label>
          <span>
            <button
              className={styles.secondaryBtn}
              onClick={() => setActiveAuthForm("sign-in")}
            >
              SignIn
            </button>
          </span>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
