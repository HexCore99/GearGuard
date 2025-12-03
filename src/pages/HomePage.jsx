import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import styles from "./HomePage.module.css";
export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <PageNav />
      <div className={styles.content}>
        <div className={styles.description}>
          <h1>Your go-to hub for sports equipment rental</h1>
          <p>
            GearGuard offers rental of sports equipment for all kinds of
            activities — from bicycles, rollerblades, and skateboards to skis,
            snowboards, tennis rackets, and balls. We make the rental process
            simple and convenient, providing reliable, well-maintained gear so
            everyone can enjoy sports and try new activities without a big
            investment.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
