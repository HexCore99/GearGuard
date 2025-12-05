import { useState } from "react";
import styles from "./SignIn.module.css";
function SignIn({ setActiveAuthForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleEmail(email) {
    setEmail(email);
  }
  function handlePassword(pass) {
    setPassword(pass);
  }

  return (
    <div className={styles.formCard}>
      <div className={styles.formHeader}>
        <h2>Welcome back</h2>
        <p>
          Access your GearGuard dashboard to manage rentals, view histories, and
          keep gear in play.
        </p>
      </div>
      <form className={styles.form}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          name="email"
          placeholder="name@university.edu"
          required
          onChange={(e) => handleEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          onChange={(e) => handlePassword(e.target.value)}
          value={password}
        />

        <div className={styles.helperRow}>
          <label className={styles.checkbox}>
            <input type="checkbox" name="remember" />
            <span>Keep me signed in</span>
          </label>
          <a className={styles.link} href="/contact-us">
            Forgot password?
          </a>
        </div>

        <button type="submit" className={styles.primaryButton}>
          Sign In
        </button>
        <p className={styles.secondaryAction}>
          New to GearGuard?
          <button
            className={styles.secondaryBtn}
            onClick={() => setActiveAuthForm("sign-up")}
          >
            SignIn
          </button>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
