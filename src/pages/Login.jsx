import PageNav from "../components/PageNav";
import styles from "./Login.module.css";

function Login() {
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
              <span className={styles.metricLabel}>Auto maintenance threshold</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricValue}>24/7</span>
              <span className={styles.metricLabel}>Check-in tracking</span>
            </div>
          </div>
        </section>

        <section className={styles.formPanel}>
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <h2>Welcome back</h2>
              <p>
                Access your GearGuard dashboard to manage rentals, view histories,
                and keep gear in play.
              </p>
            </div>
            <form className={styles.form}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="name@university.edu"
                required
              />

              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                required
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
                New to GearGuard?{" "}
                <a className={styles.link} href="/contact-us">
                  Request access
                </a>
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Login;
