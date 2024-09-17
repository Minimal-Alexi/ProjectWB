import React from "react";
import styles from "./Footer.module.css";
import qrCode from "../../images/qr-code.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-columns"]}>
        <div className={styles["footer-column"]}>
          <h4>About Toivoa</h4>
          <ul>
            <li>
              <a href="/">Subscribe</a>
            </li>
            <li>
              <p>Get 10% off your first order</p>
            </li>
            <li>
              <p>(placeholder for search box)</p>
            </li>
          </ul>
        </div>
        <div className={styles["footer-column"]}>
          <h4>Support</h4>
          <ul>
            <li>
              <p>Myllypurontie 1 00920 Helsinki Finland</p>
            </li>
            <li>
              <p>support@toivoa.fi</p>
            </li>
            <li>
              <p>+358 40 193 7758</p>
            </li>
          </ul>
        </div>
        <div className={styles["footer-column"]}>
          <h4>Account</h4>
          <ul>
            <li>
              <a href="/">My Account</a>
            </li>
            <li>
              <a href="/">Login / Register</a>
            </li>
            <li>
              <a href="/">Wishlist</a>
            </li>
            <li>
              <a href="/">Shop</a>
            </li>
          </ul>
        </div>
        <div className={styles["footer-column"]}>
          <h4>Quick Link</h4>
          <ul>
            <li>
              <a href="/" target="_blank">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                Terms Of Use
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                FAQ
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className={styles["footer-column"]}>
          <h4>Download App</h4>
          <ul>
            <li>
              <p>Save 3EUR For New App Users </p>
            </li>
            <li>
              <img src={qrCode} alt="qrcode" style={{ width: "100px", height: "100px" }}></img>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Group 9 Toivoa E-commerce Company. All
        rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
