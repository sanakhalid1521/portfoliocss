
import React from 'react';
import Image from 'next/image';
import webdevelopment from '../public/webdevelopment.webp';
import uiuxdesign1 from '../public/uiuxdesign1.png';
import consultingservice from '../public/consultingservice.webp';
import styles from '../style/services.module.css'

const Service: React.FC = () => {
  return (
    <section id="services" className={styles.serviceSection}>
      <div className={styles.serviceContainer}>
        <h2 className={styles.serviceTitle}>My Services</h2>
        <p className={styles.serviceDescription}>
          I offer a variety of services to help bring your vision to life.
        </p>

        <div className={styles.serviceItems}>
          {/* Service 1 */}
          <div className={styles.serviceItem}>
            <div className="overflow-hidden rounded">
              <Image 
                src={webdevelopment} 
                alt="Web Development" 
                width={200} 
                height={150} 
                className={styles.serviceImage} 
              />
            </div>
            <h3 className={styles.serviceItemTitle}>Web Development</h3>
            <p className={styles.serviceItemDescription}>
              Building responsive and modern web applications tailored to your needs.
            </p>
          </div>

          {/* Service 2 */}
          <div className={styles.serviceItem}>
            <div className="overflow-hidden rounded">
              <Image 
                src={uiuxdesign1} 
                alt="UI/UX Design" 
                width={200} 
                height={150} 
                className={styles.serviceImage} 
              />
            </div>
            <h3 className={styles.serviceItemTitle}>UI/UX Design</h3>
            <p className={styles.serviceItemDescription}>
              Crafting intuitive and visually appealing user interfaces.
            </p>
          </div>

          {/* Service 3 - Consultation */}
          <div className={styles.serviceItem}>
            <div className="overflow-hidden rounded">
              <Image 
                src={consultingservice} 
                alt="Consultation" 
                width={200} 
                height={150} 
                className={styles.serviceImage} 
              />
            </div>
            <h3 className={styles.serviceItemTitle}>Consultation</h3>
            <p className={styles.serviceItemDescription}>
              Providing insights and strategies for enhancing your digital presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
