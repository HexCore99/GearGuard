import { useState } from "react";
import PageNav from "../components/PageNav";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import styles from "./Login.module.css";

function Login() {
  const [activeAuthForm, setActiveAuthForm] = useState("sign-in");

  return (
    <div className={styles.loginPage}>
      <PageNav />
      <main className={styles.content}>
        <section className={styles.hero}>
          <p className={styles.kicker}>GearGuard • Sports Equipment Rental</p>
          <h1>Sign in to keep every checkout accountable</h1>
          <p className={styles.subtitle}>
            Track every bat, ball, and board with automated health points,
            maintenance thresholds, and late-fee calculations built for the
            university gym.
          </p>
          <div className={styles.badges}>
            <span className={styles.badge}>Asset tracking</span>
            <span className={styles.badge}>Health + maintenance</span>
            <span className={styles.badge}>Late-fee automation</span>
          </div>
          <div className={styles.metrics}>
            <div className={styles.metric}>
              <span className={styles.metricValue}>100%</span>
              <span className={styles.metricLabel}>Inventory visibility</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricValue}>20 pts</span>
              <span className={styles.metricLabel}>
                Auto maintenance threshold
              </span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricValue}>24/7</span>
              <span className={styles.metricLabel}>Check-in tracking</span>
            </div>
          </div>
        </section>

        <section className={styles.formPanel}>
          {activeAuthForm === "sign-in" ? (
            <SignIn setActiveAuthForm={setActiveAuthForm} />
          ) : (
            <SignUp setActiveAuthForm={setActiveAuthForm} />
          )}
        </section>
      </main>
    </div>
  );
}

export default Login;
