import React from 'react';
import { Download, Instagram, Linkedin, Globe, Share2 } from 'lucide-react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import { FaWhatsapp } from 'react-icons/fa';
import handleShare, { handleWhatsApp } from '../../utils/utils';

const Footer = ({
  socialLinks = {
    instagram: 'https://www.instagram.com',
    linkedin: 'https://www.linkedin.com',
    globe: 'https://www.example.com',
    share: '#',
  },
  contact = { email: 'defaultemail@example.com', phone: '+91 0000000000' },
  developerName = 'Sumit Jadhav',
  designLink = '#',
}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
          <Instagram className={styles.socialIcon} />
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin className={styles.socialIcon} />
        </a>
        <a onClick={()=>{handleWhatsApp()}} className="social-icon">
              <FaWhatsapp  className={styles.socialIcon} />
            </a>
        <a onClick={()=>{ handleShare()}} target="_blank" rel="noopener noreferrer">
          <Share2 className={styles.socialIcon} />
        </a>
      </div>

      <div className={styles.contact}>
        <h3>{contact.email}</h3>
        <h3>{contact.phone}</h3>
      </div>

      <div className={styles.developer}>
        <h3>Developed by {developerName}</h3>
        <a href={designLink} target="_blank" rel="noopener noreferrer">
          <h3>Design Idea</h3>
        </a>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  socialLinks: PropTypes.shape({
    instagram: PropTypes.string,
    linkedin: PropTypes.string,
    globe: PropTypes.string,
    share: PropTypes.string,
  }),
  contact: PropTypes.shape({
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
  developerName: PropTypes.string,
  designLink: PropTypes.string,
};

export default Footer;
