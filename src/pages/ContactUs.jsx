import styles from "./ContactUs.module.css";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";

function ContactUs() {
  return (
    <div className={styles.contactUs}>
      <PageNav />
      <div className={styles.content}>
        <div className={styles.topSection}>
          <p className={styles.topText}>
            <h1>Contact-Us</h1>
            We’re here to help! Whether you have questions about renting sports
            equipment, need assistance with your booking, or want more
            information about our services, our friendly and knowledgeable team
            is ready to assist you. Reach out to us via email or phone, and
            we’ll make sure your experience with GearGuard is smooth, easy, and
            enjoyable.
          </p>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.email}>
            <img src="src/assets/email.png" alt="Email" />
            <h2>Email</h2>
            <p>
              Have questions or need assistance? Reach out to our support team
              at info@gearguard.com for prompt help with your rental inquiries.
            </p>
          </div>
          <div className={styles.callUs}>
            <img src="src/assets/phone-call.png" alt="callUs" />
            <h2>Call Us</h2>
            <p>
              Prefer to speak directly? Call our customer service at +44 20 7606
              3502 during business hours for immediate assistance.
            </p>
          </div>
          <div className={styles.visitUs}>
            <img src="src/assets/location.png" alt="visitUs" />
            <h2>Visit Us</h2>
            <p>
              Come visit us at our main office located at 1st Floor, 105
              Whitechapel High St, London E1 7RA, United Kingdom. We're open
              from 9am to 6pm, Monday through Saturday, ready to help you choose
              the perfect sports gear.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
