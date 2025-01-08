import React from 'react';
import { Download, Instagram, Linkedin, Globe, Share2, Github } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import NavBar from '../components/templates/NavBar';
import styles from './MainPage.module.css';
import Footer from '../components/templates/Footer';
// import ContactForm from '../components/organisms/ContactForm';
import Portfolio from '../components/organisms/Portfolio';
import handleShare, { handleWhatsApp } from '../utils/utils.js';
import { saveAs } from 'file-saver';
import ContactForm from '../components/organisms/ContactForm.js';

const MainPage = () => {

  const handleDownloadCV = () => {
    const filePath = require("../downloads/resume/resume.pdf");
    const fileName = 'Sumit_Jadhav_Resume.pdf';
    saveAs(filePath, fileName)
  }

  return (
    <div className={styles.mainPage}>
      <NavBar
        OnPressHome={()=>{}}
        OnPressServices={()=>{}}
        OnPressAboutMe={()=>{}}
        OnPressPortfolio={()=>{}}
        OnPressContactMe={()=>{}}
      />
      <header className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Hi I am <span>Sumit Jadhav</span></h1>
          <h2>Full stack Developer | Mobile Developer</h2>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com" className="social-icon">
              <Instagram className={styles.socialIcon} />
            </a>
            <a href="https://www.instagram.com" className="social-icon">
              <Linkedin className={styles.socialIcon} />
            </a>
            <a onClick={() => { handleWhatsApp() }} className="social-icon">
              <FaWhatsapp className={styles.socialIcon} />
            </a>
            <a href="https://github.com/Victorsward32" className="social-icon">
              <Github className={styles.socialIcon} />
            </a>
            <a onClick={() => { handleShare() }} className="social-icon">
              <Share2 className={styles.socialIcon} />
            </a>
          </div>
          <div className={styles.heroButtons}>
            <button className={styles.hireMeButton}  onClick={()=>{handleWhatsApp()}}>Hire Me</button>
            <button className={styles.downloadCVButton} onClick={() => {
              handleDownloadCV()
            }} >Download CV</button>
          </div>
          <section className={styles.statsSection}>
            <div className={styles.stat}>
              <h3>1+</h3>
              <p>Experiences</p>
            </div>
            <div className={styles.stat}>
              <h3>10+</h3>
              <p>Projects done</p>
            </div>
            <div className={styles.stat}>
              <h3>3+</h3>
              <p>Happy Clients</p>
            </div>
          </section>
        </div>
        <div className={styles.heroImage}>
          <img src={require('../assets/SumitJadhavProfile.png')} alt="Designer" />
        </div>
      </header>
      <section className={styles.servicesSection}>
        <h2>Services</h2>
        <div className={styles.servicesHeader}>
          <h4>I provide custom web and app solutions</h4>
          <p>I help you get more sales, clients and position them as an expert with their strategically built website & app</p>
        </div>
        <div className={styles.services}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceImageWrapper}>
              <img src={require('../assets/mobileDevelopment.png')} alt="Mobile Development" />
            </div>
            <h3>Mobile Design + Development</h3>
            <p>Creating seamless mobile experiences with cutting-edge development solutions</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceImageWrapper}>
              <img src={require('../assets/webDevelopment.png')} alt="Web Development" />
            </div>
            <h3>Web Applications</h3>
            <p>Building responsive and dynamic web applications for modern businesses</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceImageWrapper}>
              <img src={require('../assets/cloudServices.png')} alt="Cloud Services" />
            </div>
            <h3>Cloud Services</h3>
            <p>Leveraging cloud technology for scalable and reliable solutions</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceImageWrapper}>
              <img src={require('../assets/image (6).png')} alt="Backend Services" />
            </div>
            <h3>Backend Services</h3>
            <p>Developing robust backend systems for seamless data management</p>
          </div>
        </div>
      </section>
      {/* <section className={styles.servicesSection}>
      <h2>Portfolio</h2>
      <Portfolio/>
      </section> */}
      <section className={styles.servicesSection}>
        <h2>Contact me</h2>
        <ContactForm />

      </section>
      <section className={styles.servicesSection}>
        <Footer
          socialLinks={{
            instagram: 'https://www.instagram.com/customprofile',
            linkedin: 'https://www.linkedin.com/in/customprofile',
            globe: 'https://www.customwebsite.com',
            share: 'https://www.sharelink.com',
          }}
          contact={{
            email: 'sumitjadhav6067@gmail.com',
            phone: '+91 9029118331',
          }}
          developerName="Sumit Jadhav"
          designLink="https://www.figma.com/design/VvsbQjtgr64a7y47x0lFnJ/Personal-website-%7C-Portfolio-(Community)?node-id=587-639&t=C6hqQOGVmxJOOdKB-0"
        />
      </section>


    </div>
  );
};

export default MainPage;