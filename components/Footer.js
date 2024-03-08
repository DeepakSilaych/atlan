import Styles from '../styles/Footer.module.css';
import Link from 'next/link'; // Importing Next.js Link
import { Phone, Mail } from 'lucide-react'; // Importing Lucide icons

function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footerContent}>
        <div className={Styles.footerSection}>
          <h1 className={Styles.logoText}>ML Exchange</h1>
          <p>
            ML Exchange is a platform for buying and selling of ML Models and Datasets. This platform in development phase and will be launched soon.
          </p>
          <div className={Styles.contact}>
            <span><Phone /> 123-456-789</span>
            <span><Mail /> DummyMailID@fakebook.com</span>
          </div>
          <div className={Styles.socials}>
            {/* You can replace these with Lucide icons if available */}
            <Link href="#"><i className="fab fa-facebook"></i></Link>
            <Link href="#"><i className="fab fa-instagram"></i></Link>
            <Link href="#"><i className="fab fa-twitter"></i></Link>
            <Link href="#"><i className="fab fa-youtube"></i></Link>
          </div>
        </div>
        <div className={Styles.footerSection}>
          <h2>Quick Links</h2>
          <ul className={Styles.quickLinks}>
            <li><Link href="#">Events</Link></li>
            <li><Link href="#">Team</Link></li>
            <li><Link href="#">Mentors</Link></li>
            <li><Link href="#">Gallery</Link></li>
            <li><Link href="#">Terms and Conditions</Link></li>
          </ul>
        </div>
        <div className={Styles.footerSection}>
          <h2>Contact us</h2>
          <form action="index.html" method="post" className={Styles.contactForm}>
            <input type="email" name="email" className={`${Styles.textInput} ${Styles.contactInput}`} placeholder="Your email address..."/>
            <textarea rows="4" name="message" className={`${Styles.textInput} ${Styles.contactInput}`} placeholder="Your message..."></textarea>
            <button type="submit" className={Styles.btn}>
              <Mail /> {/* Using Lucide Mail icon */}
              Send
            </button>
          </form>
        </div>
      </div>
      <div className={Styles.footerBottom}>
        &copy; ML Exchange | Designed by SilaychCodes
      </div>
    </footer>
  );
}

export default Footer;
