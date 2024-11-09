
import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from '../style/footer.module.css'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <a className={styles.footerLogo}>
          <span className={styles.footerLogoText}>Sana Khalid</span>
        </a>
        <p className={styles.footerCopyright}>
          © {currentYear} Sana Khalid
        </p>
        <div className={styles.footerSocialLinks}>
          <a
            href="https://www.linkedin.com/in/"
            className={styles.footerSocialLink}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/"
            className={styles.footerSocialLink}
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/"
            className={styles.footerSocialLink}
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/"
            className={styles.footerSocialLink}
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
